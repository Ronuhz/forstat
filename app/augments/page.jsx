import { getAugmentsFromApi } from '@utils/ServerActions'
import Card from '@components/augments/card'

const Augments = async () => {
	const { augments } = await getAugmentsFromApi()

	const augmentElements = augments.map((item) => <Card {...item} />)

	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='font-burbank-black text-5xl p-5'>Augments</p>
			<div className='flex items-center justify-center flex-wrap-reverse gap-7 m-3 pb-8'>
				{augmentElements}
			</div>
		</div>
	)
}

export default Augments
