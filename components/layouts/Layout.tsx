import Head from 'next/head';
import { Navbar } from '../ui';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			<main style={{ padding: '20px 50px' }}>{children}</main>
		</>
	);
};

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
}
