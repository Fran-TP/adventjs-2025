export default function elfBattle(elf1: string, elf2: string): number {
	let damageTakenElf1 = 3
	let damageTakenElf2 = 3

	const DAMAGE_MAP: Record<string, number> = {
		A: -1,
		B: 0,
		F: -2
	}

	for (const [turn, actionType] of Array.from(elf1).entries()) {
		switch (actionType) {
			case 'A': {
				const actionTypeElf2 = elf2[turn]!
				damageTakenElf1 += Number(DAMAGE_MAP[actionTypeElf2])
				damageTakenElf2 += actionTypeElf2 === 'B' ? 0 : -1
				break
			}
			case 'B': {
				damageTakenElf1 +=
					elf2[turn]! === 'A' ? 0 : Number(DAMAGE_MAP[elf2[turn]!])
				damageTakenElf2 += 0
				break
			}
			case 'F': {
				damageTakenElf1 += Number(DAMAGE_MAP[elf2[turn]!])
				damageTakenElf2 += -2
				break
			}
		}

		if (damageTakenElf1 <= 0) return 2
		if (damageTakenElf2 <= 0) return 1
	}

	if (damageTakenElf1 === damageTakenElf2) return 0

	return damageTakenElf1 > damageTakenElf2 ? 1 : 2
}

console.log(elfBattle('AFAB', 'BBAF'))
