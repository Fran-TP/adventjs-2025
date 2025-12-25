export default function execute(code: string): number {
	const jumpMap = new Map<number, number>()
	const stack: Array<{ index: number; type: string }> = []

	const OPENERS = new Set(['[', '{'])
	const CLOSERS: Record<string, string> = { ']': '[', '}': '{' }

	for (const [i, char] of [...code].entries()) {
		const expected = CLOSERS[char]

		if (OPENERS.has(char)) {
			stack.push({ index: i, type: char })
			continue
		}

		if (!expected) continue

		const last = stack.pop()
		if (last?.type === expected) {
			jumpMap.set(last.index, i)
			jumpMap.set(i, last.index)
		}
	}

	let ip = 0
	let value = 0

	const JUMPS: Record<string, () => boolean> = {
		'[': () => value === 0,
		'{': () => value === 0,
		']': () => value !== 0
	}

	while (ip < code.length) {
		const char = code[ip]

		if (char === '+') {
			value++
			ip++
			continue
		}

		if (char === '-') {
			value--
			ip++
			continue
		}

		const shouldJump = JUMPS[char]
		if (!shouldJump) {
			ip++
			continue
		}

		if (shouldJump()) {
			ip = (jumpMap.get(ip) ?? ip) + 1
		} else {
			ip++
		}
	}

	return value
}
console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5
