export default class Queue {
    #head;
    #tail;
    #size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    get head() {
        return this.#head;
    }

    get tail() {
        return this.#tail;
    }

    size() {
        return this.#size;
    }

    enqueue(data) {
        const newNode = { data: data, next: null };
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#size++;
    }

    dequeue() {
        if (this.#head === null) {
            return null;
        }
        const data = this.#head.data;
        this.#head = this.#head.next;
        //Remember to clean up the tail as well if the queue is now empty
        if (this.#head === null) {
            this.#tail = null;
        }
        this.#size--;
        return data;
    }

    peek() {
        if (this.#head === null) {
            return null;
        }
        return this.#head.data;
    }

    get(index) {
        if (index < 0 || index >= this.#size) {
            //throw new RangeError(`Index ${index} out of bounds`);
            return null;
        }
        let current = this.#head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }
}