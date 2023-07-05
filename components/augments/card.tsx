import Image from 'next/image'
import { AugmentCardProps } from '@types'

const Card = ({
	tabTitle,
	name,
	description,
	additionalDescription,
	icon,
	added,
}: AugmentCardProps) => {
	return (
		<div className='sm:flex-row flex-col sm:w-[600px] w-[300px] rounded-lg card_bg flex items-center justify-start p-1'>
			<Image
				src={icon}
				height={136}
				width={136}
				alt='Augment Icon'
				className='ml-3 border-none bg-transparent sm:m-0 m-4 hover:scale-105 transition-all'
			/>
			<div className='h-full w-full flex flex-col items-center justify-start p-3'>
				<p className='font-burbank outline-black text-3xl pb-1'>{name}</p>
				<p className='text-primary-gold font-burbank text-xl pb-2'>
					{tabTitle}
				</p>
				<div className='w-full flex flex-col items-start justify-center font-satoshi text-md text-gray-300 pb-4'>
					<p>{description}</p>
					<p>{additionalDescription}</p>
				</div>
				<div className='h-full w-full flex flex-col sm:items-end items-center sm:justify-end justify-center'>
					<p className='font-burbank-small-black text-xl outline-black'>
						Released on <span className='text-primary-gold'>{added.date}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card
