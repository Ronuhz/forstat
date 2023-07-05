'use client'

import { MobileLink } from './nav-links'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { NavLinks } from '@constants'

const MobileNav = () => {
	const [showMobileNav, toggleMobileNav] = useState(false)

	return (
		<div className='sm:hidden flex flex-col z-20'>
			{/* Open/Close button */}
			<Image
				className='cursor-pointer z-50'
				src='/assets/icons/mobile-nav.svg'
				width={30}
				height={30}
				alt='MORE'
				onClick={() => toggleMobileNav((prev) => !prev)}
			/>
			{/* Panel sliding in from the top */}
			<AnimatePresence>
				{showMobileNav && (
					<>
						{/* Backdrop */}
						<div
							onClick={() => toggleMobileNav(false)}
							className='absolute w-screen top-14 h-[90%] bg-transparent inset-0 overflow-auto'
						/>

						{/* Panel */}
						<motion.div
							animate={{ y: [-300, 0] }}
							exit={{ y: [0, -330] }}
							transition={{
								duration: 0.3,
							}}
							className='absolute flex flex-col gap-2 inset-x-0 mt-[2.5rem] bg-primary-gray drop-shadow-md justify-start items-center p-6 min-h-[40%] w-full leading-loose'
						>
							{/* Panel Links */}
							{NavLinks.map((item) => {
								return (
									<MobileLink
										key={item.key}
										href={item.href}
										toggleMobileNav={toggleMobileNav}
									>
										{item.text}
									</MobileLink>
								)
							})}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}

export default MobileNav
