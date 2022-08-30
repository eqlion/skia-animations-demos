import {continueRender, delayRender, staticFile} from 'remotion';

export enum EFonts {
	Roboto = 'Roboto',
	RobotoItalic = 'RobotoItalic',
	RobotoBlack = 'RobotoBlack',
	Fira = 'Fira',
}

export const ensureRobotoRegular = () => {
	if (typeof window !== 'undefined' && 'FontFace' in window) {
		const font = new FontFace(
			EFonts.Roboto,
			'url(' + staticFile('/Roboto-Regular.ttf') + ') '
		);
		const handle = delayRender();
		font.load().then(() => {
			document.fonts.add(font);
			continueRender(handle);
		});
	}

	return EFonts.Roboto;
};

export const ensureRobotoItalic = () => {
	if (typeof window !== 'undefined' && 'FontFace' in window) {
		const font = new FontFace(
			EFonts.RobotoItalic,
			'url(' + staticFile('/Roboto-ThinItalic.ttf') + ') '
		);
		const handle = delayRender();
		font.load().then(() => {
			document.fonts.add(font);
			continueRender(handle);
		});
	}

	return EFonts.RobotoItalic;
};

export const ensureFira = () => {
	if (typeof window !== 'undefined' && 'FontFace' in window) {
		const font = new FontFace(
			EFonts.Fira,
			'url(' + staticFile('/FiraMono-Regular.ttf') + ') '
		);
		const handle = delayRender();
		font.load().then(() => {
			document.fonts.add(font);
			continueRender(handle);
		});
	}

	return EFonts.Fira;
};

export const ensureRobotoBlack = () => {
	if (typeof window !== 'undefined' && 'FontFace' in window) {
		const font = new FontFace(
			EFonts.RobotoBlack,
			'url(' + staticFile('/Roboto-Black.ttf') + ') '
		);
		const handle = delayRender();
		font.load().then(() => {
			document.fonts.add(font);
			continueRender(handle);
		});
	}

	return EFonts.RobotoBlack;
};
