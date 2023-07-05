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
		<main className='p-8'>
			<h2 className='outline-black font-burbank-black text-4xl sm:text-5xl md:text-6xl pb-6 lg:px-10'>
				Battle Royale News
			</h2>
			<section className='w-full h-full text-2xl flex flex-wrap gap-6 items-stretch lg:justify-center justify-start'>
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
