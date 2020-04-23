import { SingleNode } from './single-node.model';
export class SingleLinkedList {
  head: SingleNode;
  tail: SingleNode;
  size = 0;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  existLinkedList(): boolean {
    return !this.head == null;
  }
}
