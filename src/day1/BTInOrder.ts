const walk = (current: BinaryNode<number> | null, arr: number[]): number[] => {
    if (!current) return arr;
    walk(current.left, arr);
    arr.push(current.value);
    walk(current.right, arr);
    return arr;
};

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

