import {Composition} from 'remotion';
import {SkiaCounter, SKIA_COUNTER_DURATION} from './compositions';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="SkiaCounter"
				component={SkiaCounter}
				durationInFrames={30 * SKIA_COUNTER_DURATION}
				fps={30}
				width={888}
				height={1920}
			/>
		</>
	);
};
