import { SingleNode } from './model/single-node.model';
import { Injectable } from '@angular/core';
import { SingleLinkedList } from './model/single-linkedlist.model';

@Injectable({
  providedIn: 'root'
})
export class SingleLinkedListService {
  slinkedlist: SingleLinkedList = new SingleLinkedList();
  linkListDatas: number[];
  constructor() {
    // this.slinkedlist = new SingleLinkedList();
  }

  printList() {
    this.linkListDatas = [];
    let curr = this.slinkedlist.head;
    while (curr) {
      this.linkListDatas.push(curr.element);
      curr = curr.next;
    }
  }

  createLinkedList(ndata: number) {

    const firstNode: SingleNode = new SingleNode(ndata);
    this.slinkedlist.head = firstNode;
    this.slinkedlist.tail = firstNode;
    this.slinkedlist.size = this.slinkedlist.size + 1;
  }

  appendNode(ndata: number) {
    const Node: SingleNode = new SingleNode(ndata);
    this.slinkedlist.tail.next = Node;
    this.slinkedlist.tail = Node;
    this.slinkedlist.size = this.slinkedlist.size + 1;
  }

  insertAt(ndata: number, index: number) {
    if (index > 0 && index > this.slinkedlist.size) {
      return false;
    }
    else {
      // creates a new node
      const Node: SingleNode = new SingleNode(ndata);
      let curr;
      let prev;

      curr = this.slinkedlist.head;
      // add the element to the
      // first index
      if (index === 0) {
        Node.next = this.slinkedlist.head;
        this.slinkedlist.head = Node;
      }
      else {
        curr = this.slinkedlist.head;
        let it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        Node.next = curr;
        prev.next = Node;
      }
      this.slinkedlist.size++;
    }

  }

}
