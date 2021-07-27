import React, { useEffect } from 'react';
import Head from 'next/head';

const MainLayout = ({ children, css: css_layout, title }) => {
	useEffect(() => {
		console.log(css_layout)
	}, [css_layout])
	return (
		<>
			<Head>
				{title && <title>{title} — New Project</title>}
			</Head>
			<main css={css_layout}>
				{children}
			</main>
		</>
	);
};

export default MainLayout;