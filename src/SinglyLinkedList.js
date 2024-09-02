class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add to the end of the list - PUSH
  push(val) {
    // create a node
    const node = new Node(val);

    // If the list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  // Remove from the list end of the list - POP 
  pop() {
    // If only 1 el in the list
    if (!this.head.next) {
      // reset the list
      return this.reset();
    }

    // Initialize the previous and current node
    let prev = null;
    // Start from the head
    let current = this.head;

    // Traverse to the end of the list
    while (current?.next) {
      prev = current;
      current = current.next;
    }

    // Set the tail to the previous node
    this.tail = prev;
    // Set the next of the tail as null
    this.tail.next = null;

    this.length--;
    return this;
  }

  // Reset completly the list - RESET
  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }
}

const sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.pop();

console.log(JSON.stringify(sll, null, 3));
