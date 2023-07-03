import '@styles/globals.css'
import React from 'react'
import MainNav from '@components/main-nav'

export const metadata = {
	title: 'forStat',
	description:
		'This site provides information about Fortnite. The information includes latest news, item shops, account statistics and much more',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='./favicon.ico' sizes='any' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body className='max-w-screen'>
				<MainNav />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
