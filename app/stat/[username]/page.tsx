import { ErrorNotification } from '@components/notifications'
import Section from '@components/stat/section'
import apiKeys from '@config/apiKeys'

const getStats = async (username: string) => {
	if (username === 'favicon.ico') return { error: 'This query is now allowed' }

	const response = await fetch(
		`https://fortniteapi.io/v1/stats?username=${username}`,
		{
			headers: {
				Authorization: apiKeys.fortniteioAPI,
			},
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
