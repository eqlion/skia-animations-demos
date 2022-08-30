import React from 'react';
import {useVideoConfig} from 'remotion';

const Intro: React.FC = () => {
	const {width, height} = useVideoConfig();
	return <div style={{width, height, backgroundColor: '#fff'}} />;
};

export {Intro};
