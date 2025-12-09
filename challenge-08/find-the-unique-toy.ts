export default function findUniqueToy(toy: string) {
	const countOccurrences = new Map<string, number>()

	for (const char of toy) {
		const capitalize = char.toUpperCase()
		countOccurrences.set(
			capitalize,
			(countOccurrences.get(capitalize) ?? 0) + 1
		)
	}

	return (
		[...toy].find(char => countOccurrences.get(char.toUpperCase()) === 1) ?? ''
	)
}

console.log(findUniqueToy('sotarsof')) // result -> t
console.log(findUniqueToy('Gift')) // result -> G
console.log(findUniqueToy('sS')) // result -> ''
console.log(findUniqueToy('reindeeR')) // result -> i
console.log(findUniqueToy('sarstAN')) // result -> r
console.log(findUniqueToy('Sss')) // ''
console.log(findUniqueToy('sSsa')) // a
console.log(findUniqueToy('ss')) // ''
console.log(findUniqueToy('')) // ''
