import { SingleLinkedListService } from './../single-linked-list.service';
import { Component, OnInit, NgModule, ViewChildren, QueryList, ElementRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

import { SingleLinkedList } from '../model/single-linkedlist.model';
import { SingleNode } from '../model/single-node.model';

@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.css']
})
export class SingleLinkedListComponent implements OnInit, AfterContentChecked {

  linkListDatas: number[] = [];
  singleLinkedList: SingleLinkedList = null;
  constructor(private linkListService: SingleLinkedListService) { }

  ngOnInit(): void {
    // this.linkListService = new SingleLinkedListService();
    this.singleLinkedList = this.linkListService.slinkedlist;
    // this.linkListDatas = this.linkListService.linkListDatas;
    // console.log(this.linkListService.slinkedlist);
    // this.printList();
  }

  ngAfterContentChecked() {
    // console.log(this.singleLinkedList);
    this.printList();
  }

  // ngAfterViewInit() {
  //   console.log(this.singleLinkedList);
  //   this.printList();
  // }

  // ngAfterContentInit() {
  //   console.log(this.singleLinkedList);
  //   this.printList();
  // }

  printList() {
    // console.log(this.linkListService.slinkedlist);
    this.linkListDatas = [];
    let curr = this.singleLinkedList.head;
    while (curr) {
      this.linkListDatas.push(curr.element);
      curr = curr.next;
    }
  }


}
