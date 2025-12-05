export default function decodeSantaPin(code: string): string | null {
	const regExp = /\[(.+?)\]/g
	const match = code
		.matchAll(regExp)
		.map(m => m[1])
		.toArray()

	if (match.length < 4) return null

	const operations: Record<string, (n: number) => number> = {
		'+': (n: number) => (n + 1) % 10,
		'-': (n: number) => (n + 9) % 10
	}

	let lastValue = null
	const decodedPin: string[] = []

	for (const pin of match) {
		if (pin === '<') {
			lastValue = decodedPin.at(-1)
			decodedPin.push(String(lastValue))
			continue
		}

		const decode = [...String(pin)].reduce((acc, curr) => {
			if (operations[curr]) {
				return operations[curr](acc)
			}

			return Number(curr)
		}, 0)

		decodedPin.push(String(decode))
	}

	return decodedPin.join('')
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
console.log(decodeSantaPin('[1+++++++++][2--][3----][<]'))
console.log(decodeSantaPin('[0][<][<][<]'))
console.log(decodeSantaPin('[1+][2-]'))
