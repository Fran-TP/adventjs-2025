export default function decodeSantaPin(code: string): string | null {
	const regExp = /\[(.+?)\]/g
	const match = [...code.matchAll(regExp)].map(m => m[1])

	if (match.length < 4) return null

	const operations: Record<string, (n: number) => number> = {
		'+': (n: number) => (n + 1) % 10,
		'-': (n: number) => (n + 9) % 10
	}

	const len = match.length
	const filteredMatch = match.filter(pin => pin !== '<')
	let lastPin = ''
	let decodedPin = ''

	for (const pin of filteredMatch) {
		const decodePin = [...String(pin)].reduce((acc, curr) => {
			if (operations[curr]) {
				return operations[curr](acc)
			}

			return Number(curr)
		}, 0)

		decodedPin += decodePin
		lastPin = String(decodePin)
	}

	return decodedPin + lastPin.repeat(len - filteredMatch.length)
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
console.log(decodeSantaPin('[1+++++++++][2--][3----][<]'))
console.log(decodeSantaPin('[0][<][<][<]'))
console.log(decodeSantaPin('[1+][2-]'))
