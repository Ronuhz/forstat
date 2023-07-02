'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const DesktopLink = ({ href, children }) => {
	const currentRoute = usePathname()
	const isActive = currentRoute === href

	return (
		<li className='flex items-center justify-center'>
			<Link href={href} className='p-1 tracking-widest outline-black'>
				{children}
				<div
					className={isActive ? 'rounded border-b-2 border-primary-gold' : ''}
				/>
			</Link>
		</li>
	)
}

const MobileLink = ({ href, children, toggleMobileNav }) => {
	const currentRoute = usePathname()
	const isActive = currentRoute === href

	return (
		<Link
			href={href}
			onClick={() => toggleMobileNav(false)}
			className={`text-3xl tracking-widest outline-black ${
				isActive ? 'text-primary-gold' : ''
			}`}
		>
			{children}
		</Link>
	)
}

export { DesktopLink, MobileLink }
