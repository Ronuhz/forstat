import { ApiKeys } from '@types'

export const apiKeys: ApiKeys = {
	fortniteioAPI: process.env.FORTNITEIO_API_KEY as string,
}
export default apiKeys
