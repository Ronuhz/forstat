import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@constants'
import { DesktopLink } from './nav-links'
import MobileNav from './nav-mobile'

// * The navbar elements (Links) are imported from @constants/index.jsx

const MainNav = () => {
	return (
		<nav className='bg-primary-gray shadow-md flex justify-between items-center gap-8 py-2 px-4 font-burbank-black'>
			<Logo />

			{/* Desktop Navigation */}
			<ul className='sm:flex hidden p-0 m-0 gap-4 text-xl'>
				{NavLinks.map((item) => {
					return (
						<DesktopLink key={`desktop-${item.key}`} href={item.href}>
							{item.text}
						</DesktopLink>
					)
				})}
			</ul>

			{/* Mobile Navigation */}
			<MobileNav />
		</nav>
	)
}

const Logo = () => {
	return (
		<Link href='/' className='z-50'>
			{/* Desktop */}
			<p className='text-primary-gold text-4xl outline-black sm:flex hidden'>
				forStat
			</p>

			{/* Mobile */}
			<Image
				className='sm:hidden flex cursor-pointer shadow-sm shadow-black'
				src='/assets/logo.svg'
				alt='Logo'
				width={40}
				height={40}
			/>
		</Link>
	)
}

export default MainNav
