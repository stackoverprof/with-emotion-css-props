import React from 'react';
import Head from 'next/head';

const MainLayout = ({ children, css: css_layout, title }) => {
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