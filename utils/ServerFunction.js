'use server'

const getStatsFromApi = async (username) => {
	const response = await fetch(
		`https://fortniteapi.io/v1/stats?username=${username}`,
		{
			headers: {
				Authorization: process.env.FORTNITEIO_API_KEY,
			},
			cache: 'no-cache',
		}
	)

	const data = await response.json()
	return data
}

export { getStatsFromApi }
