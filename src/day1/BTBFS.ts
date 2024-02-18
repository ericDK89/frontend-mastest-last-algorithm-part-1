export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const arr = [head];

    while (arr.length > 0) {
        const current: BinaryNode<number> | undefined = arr.shift();

        if (!current) return false;

        if (current.value === needle) return true;

        if (current.left) arr.push(current.left);
        if (current.right) arr.push(current.right);
    }

    return false;
}

