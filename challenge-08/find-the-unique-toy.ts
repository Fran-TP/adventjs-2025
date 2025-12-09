export default function findUniqueToy(toy: string) {
	const seen = new Set<string>()
	const history = new Set<string>()

	for (const char of toy) {
		if (
			!seen.delete(char.toUpperCase()) &&
			!seen.delete(char.toLowerCase()) &&
			!history.has(char.toLowerCase())
		) {
			seen.add(char)
		} else {
			history.add(char.toLowerCase())
		}
	}

	const { value } = seen[Symbol.iterator]().next()

	return value ?? ''
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
