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
