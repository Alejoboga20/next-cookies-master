import type { AppContext, AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps, theme }: MyAppProps) {
	const currentTheme: Theme =
		theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

interface MyAppProps extends AppProps {
	theme: string;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };

	const validThemes = ['light', 'dark', 'custom'];
	return {
		theme: validThemes.includes(theme) ? theme : 'light',
	};
};

export default MyApp;
