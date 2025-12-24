type Tree = {
	value: string
	left?: Tree
	right?: Tree
}

export default function isTreesSynchronized(
	tree1: Tree,
	tree2: Tree
): [boolean, string] {
	const rootValue = tree1?.value

	const stack: Array<[Tree | undefined, Tree | undefined]> = [[tree1, tree2]]

	while (stack.length) {
		const [n1, n2] = stack.pop()!

		if (!n1 && !n2) continue
		if (!n1 || !n2) return [false, rootValue]
		if (n1.value !== n2.value) return [false, rootValue]

		stack.push([n1.left, n2.right])
		stack.push([n1.right, n2.left])
	}

	return [true, rootValue]
}
