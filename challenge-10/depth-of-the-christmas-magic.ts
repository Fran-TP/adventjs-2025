export default function maxDepth(s: string): number {
	const stack: string[] = []
	let countDepth = 0

	for (let i = 0; i < s.length; i++) {
		const curr = s[i]
		const prev = s[i - 1]

		if (prev !== ']' && curr === '[') {
			countDepth++
		}

		if (curr === '[') {
			stack.push(curr)
		} else if (curr === ']' && !stack.length) {
			return -1
		}

		if (curr === ']') {
			stack.pop()
		}
	}

	return stack.length === 0 ? countDepth : -1
}

console.log(maxDepth('[[]]'))
console.log(maxDepth('[[]'))
console.log(maxDepth('[[][]]'))
console.log(maxDepth('[[[]]]'))
console.log(maxDepth('[]]]'))
