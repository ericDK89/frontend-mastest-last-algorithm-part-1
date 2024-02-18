type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = node;
            return;
        }

        const tmp = this.head;
        this.head = node;
        this.head.prev = tmp;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const tmp = this.head;
        this.head = this.head.prev;

        tmp.prev = undefined;
        return tmp.value;
    }

    peek(): T | undefined {
        if (this.head) return this.head.value;
        else return undefined;
    }
}

