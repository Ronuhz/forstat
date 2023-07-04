import Card from '@components/augments/card'
import { Augments } from '@types'

const getAugmentsFromApi = async (): Promise<Augments> => {
	const headers: HeadersInit = {
		cache: 'force-cache',
	}

	if (process.env.FORTNITEIO_API_KEY) {
		headers['Authorization'] = process.env.FORTNITEIO_API_KEY
	}

	const response = await fetch('https://fortniteapi.io/v1/game/augments', {
		headers,
	})

	const data = await response.json()
	return data
}
const Augments = async () => {
	const { augments } = await getAugmentsFromApi()

	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='font-burbank-black text-5xl p-5'>Augments</p>
			<div className='flex items-stretch justify-center flex-wrap-reverse gap-7 m-3 pb-8'>
				{augments.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
			<pre>{JSON.stringify(augments, null, 2)}</pre>
		</div>
	)
}

export default Augments
