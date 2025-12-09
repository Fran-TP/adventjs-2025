export default function findUniqueToy(toy: string): string {
	const seen = new Set<string>()

	let start = 0
	let end = toy.length - 1

	for (;;) {
		if (end <= start) {
			// console.log({ start, end })
			break
		}

		// console.log({ start, end })

		if (seen.has(toy[start]?.toLocaleLowerCase() ?? '')) {
			start++

			continue
		}

		seen.add(toy[end]?.toLocaleLowerCase() ?? '')

		if (toy[start]?.toLocaleLowerCase() === toy[end]?.toLocaleLowerCase()) {
			start++
			end--
		} else {
			end--
		}
	}

	return toy[start] === toy[end + 1] ? '*' : (toy[start] ?? '')
}

console.log(findUniqueToy('sotarsof')) // result -> t
console.log(findUniqueToy('Gift')) // result -> g
console.log(findUniqueToy('sS')) // result -> ''
console.log(findUniqueToy('reindeeR')) // result -> i
console.log(findUniqueToy('sarstAN')) // result -> r
