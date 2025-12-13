export default function elfBattle(elf1: string, elf2: string): number {
	const damageTakenElf1 = 3
	const damageTakenElf2 = 3

	const DAMAGE_MAP: Record<string, number> = {
		A: -1,
		B: 0,
		F: -2
	}

	const parseActions = (actions1: string, actions2: string) => {
		const toAction = [...actions1].map((actionType, idx) => {
			const actionType2 = actions2[idx]
			if (actionType === 'A' && actionType2 === 'B') return 0
			if (actionType === 'B' && actionType2 === 'A') return 0

			return Number(DAMAGE_MAP[actionType2!])
		})

		return toAction
	}

	const elf1Actions = parseActions(elf1, elf2)
	const elf2Actions = parseActions(elf2, elf1)

	console.log({ elf1Actions, elf2Actions })

	if (damageTakenElf1 === damageTakenElf2) return 0

	return damageTakenElf1 > damageTakenElf2 ? 1 : 2
}

console.log(elfBattle('AFAB', 'BBAF')) //
console.log(elfBattle('A', 'B')) // → 0
