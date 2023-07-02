'use client'

//import { motion } from 'framer-motion'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ErrorNotification = ({ error }) => {
	return (
		<motion.div
			className='mt-4 flex items-center justify-center outline-black font-burbank-black'
			animate={{ opacity: [0, 1], y: [-50, 0] }}
		>
			<div className='error_notification_bg flex items-center justify-between min-w-16 min-h-fit p-2 gap-2 m-0'>
				<Image
					src='/assets/icons/error.svg'
					width={30}
					height={30}
					alt='Error icon'
				/>
				<p className='text-xl tracking-widest mr-auto'>{error}</p>
			</div>
		</motion.div>
	)
}

export { ErrorNotification }
