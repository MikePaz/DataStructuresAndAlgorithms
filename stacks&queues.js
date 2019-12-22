// Both are linear data structures 
//The main difference is how the items are removed.There is no random access operation 

// Stacks:Last in First Out , Queues : First in First out


// implementation of Stack

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack;
myStack.push('google')
myStack.push('youtube')
myStack.peek();
myStack.pop();

// Implementation of Queue

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue() {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode;
        }
        this.length ++;
        return this;
    }

    deqeueue() {
        if(!this.first){
            return null;
        } else if(this.first === this.last){
            this.last = null;
        } else{
            this.first = this.first.next
            this.length--;
            return this;
        }
    }
}


const myQueue = new Queue();
myQueue.enqueue('mike')
myQueue.enqueue('nick')
myQueue.enqueue('george')
myQueue.peek();
myQueue.deqeueue();