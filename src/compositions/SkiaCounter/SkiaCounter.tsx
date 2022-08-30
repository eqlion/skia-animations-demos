import {useVideoConfig, Video, AbsoluteFill, Sequence} from 'remotion';
import {Intro} from './Intro';
import {Transition} from './Transition';
import {TransitionText} from './TransitionText';

import {
	COLORS,
	FONTS,
	START_FROM_TRANSITION,
	START_FROM_VIDEO,
	TEXTS,
	TRANSITION_DURATION,
	VIDEOS,
	VIDEO_DURATIONS,
} from './constants';

export const SkiaCounter: React.FC = () => {
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill>
			<Sequence from={0} durationInFrames={fps}>
				<Intro />
			</Sequence>
			{START_FROM_VIDEO.map((from, index) => (
				<Sequence
					key={'VIDEO' + index}
					from={fps * from}
					durationInFrames={VIDEO_DURATIONS[index] * fps}
				>
					<Video src={VIDEOS[index]} volume={() => 0} />
				</Sequence>
			))}
			{START_FROM_TRANSITION.map((from, index) => (
				<Sequence
					key={'TRANSITION' + index}
					from={from * fps}
					durationInFrames={fps * TRANSITION_DURATION}
				>
					<Transition
						colors={COLORS[index]}
						durationInFrames={fps * TRANSITION_DURATION}
					>
						<TransitionText ensureFont={FONTS[index]}>
							{TEXTS[index]}
						</TransitionText>
					</Transition>
				</Sequence>
			))}
		</AbsoluteFill>
	);
};
