export default function elfBattle(elf1: string, elf2: string): number {
	let hp1 = 3
	let hp2 = 3

	const DAMAGE_MAP: Record<string, number> = {
		A: -1,
		B: 0,
		F: -2
	}

	for (let turn = 0; turn < elf1.length; turn++) {
		const elf1Action = elf1[turn]!
		const elf2Action = elf2[turn]!

		if (elf1Action === 'A' && elf2Action === 'B') {
			continue
		}

		if (elf1Action === 'B' && elf2Action === 'A') {
			continue
		}

		hp1 += DAMAGE_MAP[elf2Action]!
		hp2 += DAMAGE_MAP[elf1Action]!

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
