import { ErrorNotification } from '@components/notifications'
import Section from '@components/stat/section'
import React, { use } from 'react'

const getStats = async (username: string) => {
	if (username === 'favicon.ico') return { error: 'This query is now allowed' }

	const headers: HeadersInit = {
		cache: 'no-cache',
	}

	if (process.env.FORTNITEIO_API_KEY) {
		headers['Authorization'] = process.env.FORTNITEIO_API_KEY
	}

	const response = await fetch(
		`https://fortniteapi.io/v1/stats?username=${username}`,
		{
			headers,
		}
	)

	const data = await response.json()

	return data
}

const page = async ({ params }: any) => {
	const stats = await getStats(params.username)

	return (
		<>
			{stats.result ? (
				<Section playerStats={stats} />
			) : (
				<ErrorNotification error={stats?.message || stats?.error} />
			)}
		</>
	)
}

export default page
