const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
    if (!curr) return path; //base case
    path.push(curr.value);
    walk(curr.left, path);
    walk(curr.right, path);
    return path;
};

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []); //recursive call
}

