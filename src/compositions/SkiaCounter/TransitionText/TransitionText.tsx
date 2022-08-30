import {EFonts} from '@Utils/loadFont';
import React, {PropsWithChildren} from 'react';
import {useVideoConfig} from 'remotion';
import {Text} from './styles';

type TransitionTextProps = {ensureFont: () => EFonts};

const TransitionText: React.FC<PropsWithChildren<TransitionTextProps>> = ({
	children,
	ensureFont,
}) => {
	const {height, width} = useVideoConfig();
	const [fontFamily] = React.useState(() => ensureFont());

	return (
		<div
			style={{
				maxHeight: height,
				maxWidth: width,
			}}
		>
			<Text
				style={{
					fontFamily,
				}}
			>
				{children}
			</Text>
		</div>
	);
};

export {TransitionText};
