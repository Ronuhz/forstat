'use client'

import { getStatsFromApi } from '@utils/ServerActions'
import { ChangeEvent, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@components/stat/section'
import { ErrorNotification } from '@components/notifications'
import { PlayerStatsProps } from '@types'

const Stats = () => {
	const [playerStats, setPlayerStats] = useState<PlayerStatsProps>()
	const [searchInfo, setSearchInfo] = useState({
		username: '',
	})

	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSearch = async () => {
		const username = searchInfo.username

		if (!username) {
			setError('Provide a username')
			return
		}

		setError('') // clears the active error (of there is any)
		setPlayerStats(undefined) // clears the previously searched stats
		setLoading(true)

		const response = await getStatsFromApi(username)
		setSearchInfo((prev) => ({ ...prev, username: '' }))

		if (!response.result) {
			let message = response.message ? response.message : response.error
			setError(message)
			setLoading(false)
			return
		}

		setPlayerStats(response)
		setLoading(false)
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		setSearchInfo((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	return (
		<main>
			<div className='flex justify-center mt-5 gap-3'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					value={searchInfo.username}
					onChange={handleChange}
					className='font-burbank-black bg-gray-100 text-gray-600 placeholder:text-gray-500
					border-none p-1 rounded-lg text-xl'
				/>
				<motion.button
					disabled={loading}
					onClick={handleSearch}
					whileTap={{ scale: 0.9 }}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
					className='primary_button'
				>
					Search
				</motion.button>
			</div>
			{error ? (
				<ErrorNotification error={error} />
			) : (
				playerStats && <Section playerStats={playerStats} />
			)}
		</main>
	)
}

export default Stats
