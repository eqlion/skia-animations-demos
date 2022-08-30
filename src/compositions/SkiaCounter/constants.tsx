import React from 'react';
import {
	ensureFira,
	ensureRobotoBlack,
	ensureRobotoItalic,
	ensureRobotoRegular,
} from '@Utils/loadFont';

import video0 from '@Assets/video0.mp4';
import video1 from '@Assets/video1.mp4';
import video2 from '@Assets/video2.mp4';

export const VIDEO_DURATIONS = [8, 11, 9];
export const TRANSITION_DURATION = 4;
const CONSEQ_DURATIONS = [
	TRANSITION_DURATION,
	...VIDEO_DURATIONS.reduce(
		(acc, v) => [...acc, v, TRANSITION_DURATION],
		[] as number[]
	),
];

const START_FROM_TOTAL = CONSEQ_DURATIONS.reduce(
	(acc, v, index) => [...acc, acc[index] + v - 0.5],
	[0]
);

const START_FROM = START_FROM_TOTAL.slice(0, -1);
export const TOTAL_DURATION = Math.max(...START_FROM_TOTAL);

export const START_FROM_VIDEO = START_FROM.filter((_, i) => i % 2 === 1);
export const START_FROM_TRANSITION = START_FROM.filter((_, i) => i % 2 === 0);

export const VIDEOS = [video0, video1, video2];
export const COLORS = [
	['#fff', '#f99'],
	['#f99', '#99f'],
	['#99f', '#000'],
	['#000', '#000'],
];
export const FONTS = [
	ensureFira,
	ensureRobotoBlack,
	ensureRobotoItalic,
	ensureRobotoRegular,
];
export const TEXTS: React.ReactNode[] = [
	<>
		Animated counter with
		<br />
		React Native Skia,
		<br />
		silky-smooth 60 fps
	</>,
	'Customize animation, font, color, number of digits',
	'Staggered animation too!',
	<>
		Video made with Remotion ❤️
		<br />
		Code is available on GitHub
	</>,
];
