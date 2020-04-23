import { SingleLinkedList } from './../../model/single-linkedlist.model';
import { SingleLinkedListService } from './../../single-linked-list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent implements OnInit {
  isLoading = false;
  singleLinkedList: SingleLinkedList = null;

  constructor(private linkListService: SingleLinkedListService) { }

  ngOnInit(): void {
    // this.linkListService = new SingleLinkedListService();
    this.singleLinkedList = this.linkListService.slinkedlist;
  }

  createLinkedList(nodeValue: HTMLInputElement) {
    this.isLoading = true;
    this.linkListService.createLinkedList(parseInt(nodeValue.value, 0));
    this.makeLoadingFalse();

    // this.linkListService.printList();
  }

  appendLinkedList(nodeValue: HTMLInputElement) {
    this.isLoading = true;
    this.linkListService.appendNode(parseInt(nodeValue.value, 0));
    this.makeLoadingFalse();

    // this.linkListService.printList();

  }

  insertAtLinkedList(nodeValue: HTMLInputElement, position: HTMLInputElement) {
    this.isLoading = true;
    this.linkListService.insertAt(parseInt(nodeValue.value, 0), parseInt(position.value, 0));
    this.makeLoadingFalse();

    // this.linkListService.printList();
  }

  makeLoadingFalse() {
    setInterval(() => {
      this.isLoading = false;
    }, 1000);
  }



}
