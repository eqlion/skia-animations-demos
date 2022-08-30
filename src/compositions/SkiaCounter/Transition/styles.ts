import styled from 'styled-components';

type ContainerProps = {
	maxSize: number;
	backgroundColor: string;
	left: number;
	top: number;
	opacity: number;
	scale: number;
};

export const Container = styled.div<ContainerProps>(
	({maxSize, backgroundColor, left, top, opacity, scale}) => ({
		backgroundColor,
		borderRadius: maxSize / 2,
		height: maxSize,
		width: maxSize,
		position: 'absolute',
		left,
		top,
		opacity,
		transform: `scale(${scale})`,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	})
);
