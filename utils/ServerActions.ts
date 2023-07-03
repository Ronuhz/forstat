'use server'

const apiKey = process.env.FORTNITEIO_API_KEY

interface Augments {
	augments: {
		tabTitle: string
		name: string
		description: string
		additionalDescription: string
		icon: string
		added: {
			date: string
		}
	}[]
}

const getStatsFromApi = async (username: string) => {
	const headers: HeadersInit = {
		cache: 'no-cache',
	}

	if (apiKey) {
		headers['Authorization'] = apiKey
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

const getAugmentsFromApi = async (): Promise<Augments> => {
	const headers: HeadersInit = {
		cache: 'force-cache',
	}

	if (apiKey) {
		headers['Authorization'] = apiKey
	}

	const response = await fetch('https://fortniteapi.io/v1/game/augments', {
		headers,
	})

	const data = await response.json()
	return data
}

export { getStatsFromApi, getAugmentsFromApi }
