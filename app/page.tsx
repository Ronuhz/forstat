import Card from '@components/news/card'
import { News } from '@types'
import apiKeys from '@config/apiKeys'

const getBRNewsFromApi = async (): Promise<News> => {
	const response = await fetch(
		'https://fortniteapi.io/v1/news?lang=en&type=br',
		{
			headers: {
				Authorization: apiKeys.fortniteioAPI,
			},
		}
	)

	return response.json()
}

const News = async () => {
	const newsData = await getBRNewsFromApi()

	return (
		<main className='pt-8 p-4'>
			<h2 className='text-center outline-black font-burbank text-xl md:text-3xl pb-1'>
				Battle Royale News
			</h2>
			{/* <section className='w-full h-full text-2xl flex flex-wrap gap-6 items-stretch lg:justify-center justify-start'> */}
			<section className='w-full h-full flex flex-wrap lg:gap-6 gap-3 flex-shrink items-stretch flex-row-reverse justify-center'>
				{newsData.news.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						body={item.body}
						image={item.image}
						live={item.live}
					/>
				))}
			</section>
		</main>
	)
}

export default News
