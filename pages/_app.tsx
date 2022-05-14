import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '../themes';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }: AppProps) {
	const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

	useEffect(() => {
		const cookieTheme = Cookies.get('theme') || 'light';

		const selectedTheme =
			cookieTheme === 'light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme;

		setCurrentTheme(selectedTheme);
	}, []);

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
