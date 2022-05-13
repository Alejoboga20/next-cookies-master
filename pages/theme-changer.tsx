import React, { ChangeEvent, useEffect, useState } from 'react';
import {
	Button,
	Card,
	CardContent,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
import axios from 'axios';

import { Layout } from '../components/layouts';

const ThemeChangerPage = ({ theme }: ThemeChangerPageProps) => {
	const [currentTheme, setCurrentTheme] = useState('light');

	const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedTheme = event.target.value;
		setCurrentTheme(selectedTheme);

		Cookies.set('theme', selectedTheme);
	};

	const onClick = async () => {
		const { data } = await axios.get('/api/hello');

		console.log(data);
	};

	useEffect(() => {
		console.log(Cookies.get('theme'));
	});

	return (
		<Layout>
			<Card>
				<CardContent>
					<FormControl>
						<FormLabel>Theme</FormLabel>
						<RadioGroup value={currentTheme} onChange={onThemeChange}>
							<FormControlLabel value='light' control={<Radio />} label='Light' />
							<FormControlLabel value='dark' control={<Radio />} label='Dark' />
							<FormControlLabel value='custom' control={<Radio />} label='Custom' />
						</RadioGroup>
					</FormControl>

					<Button onClick={onClick}>Request</Button>
				</CardContent>
			</Card>
		</Layout>
	);
};

interface ThemeChangerPageProps {
	theme: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { theme = 'light' } = req.cookies;

	return {
		props: {
			theme: theme,
		},
	};
};

export default ThemeChangerPage;
