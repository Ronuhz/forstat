const Card = ({
	placetop1,
	kd,
	winrate,
	placetop3,
	placetop5,
	placetop6,
	placetop10,
	placetop12,
	placetop25,
	kills,
	matchesplayed,
	gamemode,
}) => {
	return (
		<div className='min-w-16 min-h-20 p-4 rounded-2xl card_bg leading-none'>
			<div
				className='font-burbank-black outline-black flex 
            items-center justify-center uppercase '
			>
				<h1 className='text-primary-gold mr-auto text-3xl'>{gamemode}</h1>
			</div>
			<hr />
			<br />
			<div>
				<InfoLine value={placetop1}>Wins</InfoLine>
				{placetop3 !== 0 && <InfoLine value={placetop3}>Top 3</InfoLine>}
				{placetop5 !== 0 && <InfoLine value={placetop5}>Top 5</InfoLine>}
				{placetop6 !== 0 && <InfoLine value={placetop6}>Top 6</InfoLine>}
				{placetop10 !== 0 && <InfoLine value={placetop10}>Top 10</InfoLine>}
				{placetop12 !== 0 && <InfoLine value={placetop12}>Top 12</InfoLine>}
				{placetop25 !== 0 && <InfoLine value={placetop25}>Top 25</InfoLine>}
				<InfoLine value={kills}>Kills</InfoLine>
				<InfoLine value={kd}>K/D</InfoLine>
				<InfoLine value={matchesplayed}>Matches</InfoLine>
				<InfoLine
					value={Math.round((placetop1 / matchesplayed) * 10000) / 100 + '%'}
				>
					Win Rate
				</InfoLine>
			</div>
		</div>
	)
}

const InfoLine = ({ value, children }) => {
	return (
		<div
			className='flex items-center justify-between gap-4 my-1 mx-2 
		font-burbank-black outline-black'
		>
			<p className='text-3xl leading-none'>{children}</p>
			<p className='text-primary-gold text-2xl leading-none'>{value}</p>
		</div>
	)
}

export default Card
