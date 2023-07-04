'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

const StatSearchForm = () => {
	const router = useRouter()
	const [searchInfo, setSearchInfo] = useState({
		username: '',
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		setSearchInfo((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<form
			className='flex justify-center mt-5 gap-3'
			onSubmit={(event) => {
				event.preventDefault()
				setSearchInfo((prev) => ({ ...prev, username: '' }))
				router.push(`/stat/${searchInfo.username}`)
			}}
		>
			<input
				type='text'
				name='username'
				placeholder='Username'
				required
				value={searchInfo.username}
				onChange={handleChange}
				className='font-burbank-black bg-gray-100 text-gray-600 placeholder:text-gray-500
					border-none p-1 rounded-lg text-xl'
			/>
			<button type='submit' className='primary_button'>
				Search
			</button>
		</form>
	)
}

export default StatSearchForm
