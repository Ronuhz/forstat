import Image from 'next/image'

interface CardProp {
	title: string
	body: string
	image: string
	live: boolean
}

const Card = ({ title, body, image, live }: CardProp) => {
	return (
		<section className='flex flex-col md:flex-row lg:flex-col lg:flex-auto items-start justify-start gap-5 lg:max-w-xl w-full card_bg rounded-xl p-5'>
			<Image
				src={image}
				height={720}
				width={1280}
				alt='news_image'
				className='md:w-[20rem] lg:w-[40rem] rounded-lg shadow-md hover:shadow-2xl shadow-black lg:hover:scale-[1.03] lg:hover:-translate-y-1 transition-all'
			/>
			<div className='h-full w-full flex flex-col items-start justify-between'>
				<div>
					<h3 className='text-xl sm:text-2xl font-satoshi font-extrabold mb-2'>
						{title}
					</h3>
					<p className='font-satoshi text-lg sm:text-xl text-gray-300 '>
						{body}
					</p>
				</div>
				<p
					className={`font-satoshi text-lg sm:text-xl ${
						live ? 'text-gray-100 ' : 'text-gray-400'
					} pt-3 `}
				>
					{live ? 'Active' : 'Expired'}
				</p>
			</div>
		</section>
	)
}

export default Card
