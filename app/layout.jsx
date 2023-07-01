import '@styles/globals.css'
import React from 'react'
import Nav from '@components/Nav'

export const metadata = {
	name: 'forStat',
	title: 'forStat',
	description:
		'This site provides information about Fortnite. The information includes latest news, item shops, account statistics and much more',
}

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='./favicon.ico' sizes='any' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body className='max-w-screen'>
				<Nav />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
