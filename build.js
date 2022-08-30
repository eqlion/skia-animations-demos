const path = require('path');
const {getCompositions, renderMedia} = require('@remotion/renderer');
const {bundle} = require('@remotion/bundler');

const start = async () => {
	// You only have to do this once, you can reuse the bundle.
	const entry = './src/index';
	console.log('Creating a Webpack bundle of the video');
	const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
		// If you have a Webpack override, make sure to add it here
		webpackOverride: (config) => {
			return {
				...config,
				resolve: {
					...config.resolve,
					alias: {
						...(config.resolve?.alias ?? {}),
						'@Assets': path.join(process.cwd(), 'assets'),
						'@Utils': path.join(process.cwd(), 'src', 'utils'),
					},
				},
			};
		},
	});

	// Parametrize the video by passing arbitrary props to your component.
	const inputProps = {
		foo: 'bar',
	};

	// Extract all the compositions you have defined in your project
	// from the webpack bundle.
	const comps = await getCompositions(bundleLocation, {
		// You can pass custom input props that you can retrieve using getInputProps()
		// in the composition list. Use this if you want to dynamically set the duration or
		// dimensions of the video.
		inputProps,
	});

	// Select the composition you want to render.
	const renderComp = async (composition) => {
		const compositionId = composition.id;
		if (!composition) {
			throw new Error(`No composition with the ID ${compositionId} found.
  Review "${entry}" for the correct ID.`);
		}

		const outputLocation = `out/${compositionId}.mp4`;
		console.log('Attempting to render:', outputLocation);

		await renderMedia({
			composition,
			serveUrl: bundleLocation,
			codec: 'h264',
			outputLocation,
			inputProps,
		});
	};

	for (const comp of comps) {
		await renderComp(comp);
	}
	// Ensure the composition exists

	console.log('Render done!');
};

start();
