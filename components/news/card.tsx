import Image from 'next/image'
import { NewsCardProp } from '@types'

const Card = ({ title, body, image, live }: NewsCardProp) => {
	return (
		<section
			className='flex flex-col lg:flex-col items-start justify-start gap-2 
		max-w-[20rem] md:max-w-[30vw] lg:max-w-[29vw] xl:max-w-[22vw] 2xl:max-w-[25rem] 
		card_bg rounded-xl p-3 md:p-4'
		>
			<Image
				src={image}
				height={243}
				width={432}
				alt='news_image'
				className='w-fit rounded-lg shadow-md lg:hover:shadow-2xl shadow-black lg:hover:scale-[1.03] lg:hover:-translate-y-1 transition-all'
			/>
			<div className='h-full w-full flex flex-col items-start justify-between'>
				<div>
					<h3 className='text-base lg:text-lg font-satoshi font-extrabold mb-1'>
						{title}
					</h3>
					<p className='font-satoshi text-sm lg:text-base text-gray-300'>
						{body}
					</p>
				</div>
				<p
					className={`font-satoshi text-sm md:text-base mt-2 ${
						live ? 'text-gray-100 ' : 'text-gray-400'
					}`}
				>
					{live ? 'Active' : 'Expired'}
				</p>
			</div>
		</section>
	)
}

export default Card
