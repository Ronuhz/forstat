export type SectionProps = {
	playerStats: {
		name: string
		account: {
			level: number
		}
		global_stats: {
			solo: {
				placetop1: number
				kd: number
				winrate: number
				placetop3: number
				placetop5: number
				placetop6: number
				placetop10: number
				placetop12: number
				placetop25: number
				kills: number
				matchesplayed: number
			}
			duo: {
				placetop1: number
				kd: number
				winrate: number
				placetop3: number
				placetop5: number
				placetop6: number
				placetop10: number
				placetop12: number
				placetop25: number
				kills: number
				matchesplayed: number
			}
			trio: {
				placetop1: number
				kd: number
				winrate: number
				placetop3: number
				placetop5: number
				placetop6: number
				placetop10: number
				placetop12: number
				placetop25: number
				kills: number
				matchesplayed: number
			}
			squad: {
				placetop1: number
				kd: number
				winrate: number
				placetop3: number
				placetop5: number
				placetop6: number
				placetop10: number
				placetop12: number
				placetop25: number
				kills: number
				matchesplayed: number
			}
		}
	}
}
