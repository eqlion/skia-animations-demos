import React, {PropsWithChildren} from 'react';
import {
	Easing,
	interpolate,
	interpolateColors,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Container} from './styles';

type Props = {
	colors: string[];
	durationInFrames: number;
};

const Transition: React.FC<PropsWithChildren<Props>> = ({
	colors,
	durationInFrames,
	children,
}) => {
	const frame = useCurrentFrame();
	const {height, width, fps} = useVideoConfig();
	const maxSize = Math.sqrt(width * width + height * height);
	const scaleIntro = interpolate(frame, [0, fps], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});
	const opacity = interpolate(
		frame,
		[durationInFrames - fps / 2, durationInFrames],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const backgroundColor = interpolateColors(frame, [0, fps], colors);
	const scaleOutro = interpolate(
		frame,
		[durationInFrames - fps / 2, durationInFrames],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.elastic(1)),
		}
	);

	const scale = scaleIntro * scaleOutro;
	const top = (height - maxSize) / 2;
	const left = (width - maxSize) / 2;

	return (
		<Container
			{...{
				maxSize,
				backgroundColor,
				top,
				left,
				scale,
				opacity,
			}}
		>
			{children}
		</Container>
	);
};

export {Transition};
