// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';
import path from 'path';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);

Config.Bundling.overrideWebpackConfig((config) => {
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
});
