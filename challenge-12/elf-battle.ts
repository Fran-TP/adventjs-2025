export default function elfBattle(elf1: string, elf2: string): number {
	let hp1 = 3
	let hp2 = 3
	const rounds = Math.min(elf1.length, elf2.length)

	const ACTIONS_TO_DAMAGE: Record<string, number> = {
		A: 1,
		B: 0
	}

	for (let round = 0; round < rounds; round++) {
		const move1 = elf1[round]!
		const move2 = elf2[round]!

		let damageToElf1 = 0
		let damageToElf2 = 0

		if (move2 === 'A' && move1 !== 'B') {
			damageToElf1 = 1
		}
		if (move2 === 'F') {
			damageToElf1 = 2
		}

		if (move1 === 'A' && move2 !== 'B') {
			damageToElf2 = 1
		}
		if (move1 === 'F') {
			damageToElf2 = 2
		}

		hp1 -= damageToElf1
		hp2 -= damageToElf2
		if (hp1 <= 0 || hp2 <= 0) {
			break
		}
	}

	if (hp1 > hp2) return 1
	if (hp2 > hp1) return 2

	return 0
}

console.log(elfBattle('AFAB', 'BBAF')) // 1
console.log(elfBattle('A', 'B')) // → 0
