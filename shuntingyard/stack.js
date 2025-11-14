export default class Stack {
    #head;
    #size;

    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    get head() {
        return this.#head;
    }

    size() {
        return this.#size;
    }
    
    push(data) {
        const newNode = { data: data, next: this.#head };
        this.#head = newNode;
        this.#size++;
    }

    pop() {
        if (this.#head === null ) {
            return null;
        }
        const data = this.#head.data;
        this.#head = this.#head.next;
        this.#size--;
        return data;
    }

    peek() {
        if (this.#head === null ) {
            return null;
        }
        return this.#head.data;
    }

    get(index) {
        if (index < 0 || index >= this.#size) {
            return null;
            //throw new RangeError(`Index out of bounds`);
        }
        let current = this.#head;
        for (let i = 0; i<index; i++) {
            current = current.next;
        }
        return current.data;
    }
}
