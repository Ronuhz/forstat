import Card from './Card'

const Section = ({ playerStats }) => {
	const playedSolo = playerStats.global_stats.hasOwnProperty('solo')
	const playedDuo = playerStats.global_stats.hasOwnProperty('duo')
	const playedTrio = playerStats.global_stats.hasOwnProperty('trio')
	const playedSquad = playerStats.global_stats.hasOwnProperty('squad')
	console.log(playerStats)
	return (
		<section className='flex flex-col items-center justify-center'>
			<h1
				className='outline-black font-burbank-black 
			text-center mt-10 text-5xl max-sm:text-4xl'
			>
				{playerStats.name} Account Stats
			</h1>
			<p
				className='outline-black font-burbank-black text-4xl 
			max-sm:text-3xl'
			>
				Level{' '}
				<span className='text-primary-gold'>{playerStats.account.level}</span>
			</p>
			<div className='flex items-center justify-center flex-wrap gap-8 p-5'>
				{playedSolo && (
					<Card {...playerStats.global_stats.solo} gamemode='solo' />
				)}
				{playedDuo && <Card {...playerStats.global_stats.duo} gamemode='duo' />}
				{playedTrio && (
					<Card {...playerStats.global_stats.trio} gamemode='trio' />
				)}
				{playedSquad && (
					<Card {...playerStats.global_stats.squad} gamemode='squad' />
				)}
				{!playedSolo && !playedDuo && !playedTrio && !playedSquad && (
					<p className='mt-24 text-6xl'>This user hasn't played yet</p>
				)}
			</div>
		</section>
	)
}

export default Section
