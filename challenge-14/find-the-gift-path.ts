type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

export default function findGiftPath(workshop: Workshop, gift: Gift): Path {
	for (const key in workshop) {
		const value = workshop[key]

		if (value === gift) {
			return [key]
		}

		if (typeof workshop[key] === 'object') {
			const subPath = findGiftPath(workshop[key], gift)

			if (subPath.length) {
				return [key, ...subPath]
			}
		}
	}

	return []
}

const workshop = {
	storage: {
		shelf: {
			box1: 'train',
			box2: 'switch'
		},
		box: 'car'
	},
	gift: 'doll'
}

console.log(findGiftPath(workshop, 'train'))
// ➜ ['storage', 'shelf', 'box1']

// console.log(findGiftPath(workshop, 'switch'))
// ➜ ['storage', 'shelf', 'box2']

// console.log(findGiftPath(workshop, 'car'))
// ➜ ['storage', 'box']

// console.log(findGiftPath(workshop, 'doll'))
// ➜ ['gift']

// console.log(findGiftPath(workshop, 'plane'))
// ➜ []
