'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function getBaseRoute(str: string) {
	const firstSlashIndex = str.indexOf('/')
	const secondSlashIndex = str.indexOf('/', firstSlashIndex + 1)

	if (secondSlashIndex !== -1) {
		return str.substring(0, secondSlashIndex)
	} else {
		return str
	}
}

interface DesktopLinkProps {
	href: string
	children: React.ReactNode
}

const DesktopLink = ({ href, children }: DesktopLinkProps) => {
	const currentRoute = usePathname()
	const isActive = getBaseRoute(currentRoute) === href

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

interface MobileLinkProps {
	href: string
	children: React.ReactNode
	toggleMobileNav: (value: boolean) => void
}

const MobileLink = ({ href, children, toggleMobileNav }: MobileLinkProps) => {
	const currentRoute = usePathname()
	const isActive = getBaseRoute(currentRoute) === href

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
