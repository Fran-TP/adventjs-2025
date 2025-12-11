export default function maxDepth(s: string): number {
	const stack: string[] = []
	let countBracket = 0
	let maxDepth = 0

	for (const bracket of s) {
		if (bracket === '[') {
			stack.push(bracket)
			++countBracket
		}

		if (!stack.length) {
			return -1
		}

		if (bracket === ']') {
			stack.pop()
			--countBracket
		}

		maxDepth = Math.max(countBracket, maxDepth)
	}

	return stack.length === 0 ? maxDepth : -1
}

console.log(maxDepth('[[]]')) // 2
console.log(maxDepth('[[]')) // -1
console.log(maxDepth('[[][]]')) // 2
console.log(maxDepth('[[[]]]')) // 3
console.log(maxDepth('[]]]')) // - 1
console.log(maxDepth('[][]')) // 1
