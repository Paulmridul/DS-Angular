import { element } from 'protractor';
export class SingleNode {

  element: number;
  next: SingleNode;
  // constructor
  constructor(data: number) {
    this.element = data;
    this.next = null;
  }
}
