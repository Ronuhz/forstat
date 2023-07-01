'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Nav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false)

	const toggleMobileNav = () => {
		setToggleDropdown((prev) => !prev)
	}

	return (
		<nav className='bg-primary-gray shadow-lg flex justify-between items-center gap-8 py-2 px-4 font-burbank-black'>
			<Link
				onClick={() => setToggleDropdown(false)}
				href='/'
				className='text-primary-gold text-4xl outline-black sm:flex hidden'
			>
				forStat
			</Link>
			<Link
				onClick={() => setToggleDropdown(false)}
				href='/'
				className='sm:hidden flex'
			>
				<motion.div
					className='z-50'
					whileTap={{ scale: 0.7 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					<Image
						className='cursor-pointer drop-shadow-lg '
						src='/assets/logo.svg'
						alt='Logo'
						width={40}
						height={40}
					/>
				</motion.div>
			</Link>

			{/* Desktop Navigation */}
			<div className='sm:flex hidden'>
				<NavLinks mobile={false} />
			</div>

			{/* Mobile Navigation */}
			<div className='sm:hidden flex flex-col cursor-pointer z-20'>
				<Image
					src='/assets/icons/mobile-nav.svg'
					width={30}
					height={30}
					alt='MORE'
					className='z-50'
					onClick={() => toggleMobileNav()}
				/>
				<AnimatePresence>
					{toggleDropdown && (
						<motion.div
							animate={{ y: [-20, 0] }}
							exit={{ y: [0, -400], opacity: [1, 0] }}
							transition={{ type: 'just' }}
							className='absolute inset-x-0 mt-[2rem] bg-primary-gray drop-shadow-md flex justify-center items-start p-6 h-[40%] w-screen leading-loose'
						>
							<NavLinks mobile={true} toggleMobileNav={toggleMobileNav} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	)
}

const NavLinks = (props) => {
	return (
		<ul
			className={`p-0 m-0 flex gap-4 text-xl ${props.mobile ? 'flex-col' : ''}`}
		>
			<NavLink href='/stat' {...props}>
				Stat
			</NavLink>
		</ul>
	)
}

const NavLink = ({ children, href, mobile, toggleMobileNav }) => {
	const currentRoute = usePathname()
	const isActive = currentRoute === href
	return (
		<li>
			<Link
				href={href}
				onClick={() => (mobile ? toggleMobileNav() : {})}
				className={`flex items-center justify-center p-1 hover:text-primary-gold tracking-widest outline-black ${
					mobile ? (isActive ? 'text-4xl text-primary-gold' : 'text-4xl') : ''
				}`}
			>
				{children}
			</Link>
			<div
				className={
					isActive
						? !mobile
							? 'rounded border-b-2 border-primary-gold'
							: ''
						: ''
				}
			/>
		</li>
	)
}

export default Nav
