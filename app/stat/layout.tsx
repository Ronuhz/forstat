import StatSearchForm from '@components/stat/search-form'
import { ReactNode } from 'react'

const StatLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section>
			<StatSearchForm />
			{children}
		</section>
	)
}

export default StatLayout
