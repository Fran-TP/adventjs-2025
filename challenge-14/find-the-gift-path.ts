type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

export default function findGiftPath(workshop: Workshop, gift: Gift): Path {
	for (const key in workshop) {
		const value = workshop[key]

		if (value === gift) {
			return [key]
		}

		if (typeof value === 'object') {
			const subPath = findGiftPath(value, gift)

			if (subPath.length) {
				return [key, ...subPath]
			}
		}
	}

	return []
}
