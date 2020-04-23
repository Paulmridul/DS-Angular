import { SearchNodeComponent } from './LinkedList/single-linked-list/search-node/search-node.component';
import { DeleteNodeComponent } from './LinkedList/single-linked-list/delete-node/delete-node.component';
import { AddNodeComponent } from './LinkedList/single-linked-list/add-node/add-node.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleLinkedListComponent } from './LinkedList/single-linked-list/single-linked-list.component';
import { StackLinkedlistComponent } from './Stack/stack-linkedlist/stack-linkedlist.component';


const routes: Routes = [
  {
    path: '', component: SingleLinkedListComponent, children: [
      { path: '', component: AddNodeComponent },
      { path: 'delete', component: DeleteNodeComponent },
      { path: 'search', component: SearchNodeComponent }
    ]

  },
  { path: 'stack', component: StackLinkedlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
