export default function revealSantaRoute(routes: [string, string][]): string[] {
	const paths = new Map(routes)
	let path = routes[0]![0]!

	const resultPath: string[] = []

	while (true) {
		if (!paths.has(path)) {
			resultPath.push(path)

			return resultPath
		}

		resultPath.push(path)
		path = paths.get(path)!
	}
}

console.log(
	revealSantaRoute([
		['USA', 'BRA'],
		['JPN', 'PHL'],
		['BRA', 'UAE'],
		['UAE', 'JPN'],
		['CMX', 'HKN']
	])
) // → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(
	revealSantaRoute([
		['MEX', 'CAN'],
		['UK', 'GER'],
		['CAN', 'UK']
	])
)
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(
	revealSantaRoute([
		['STA', 'HYD'],
		['ESP', 'CHN']
	])
)
// → ['STA', 'HYD']
