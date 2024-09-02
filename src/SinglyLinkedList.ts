export class Node<T> {
    val: T;
    next: Node<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T): this {
        const node = new Node<T>(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(): this {
        if (!this.head) {
            return this
        }

        if (!this.head.next) {
            return this.reset();
        }

        let prev: Node<T> | null = null;
        let current: Node<T> | null = this.head;

        while (current && current.next) {
            prev = current;
            current = current.next;
        }

        if (prev) {
            this.tail = prev;
            this.tail.next = null;
        }

        this.length--;
        return this;
    }

    reset(): this {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }
}
