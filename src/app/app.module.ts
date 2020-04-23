import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleLinkedListComponent } from './LinkedList/single-linked-list/single-linked-list.component';
import { NavComponent } from './shared/nav/nav.component';
import { StackLinkedlistComponent } from './Stack/stack-linkedlist/stack-linkedlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleNodeComponent } from './LinkedList/nodes/single-node/single-node.component';
import { FormsModule } from '@angular/forms';
import { AddNodeComponent } from './LinkedList/single-linked-list/add-node/add-node.component';
import { DeleteNodeComponent } from './LinkedList/single-linked-list/delete-node/delete-node.component';
import { SearchNodeComponent } from './LinkedList/single-linked-list/search-node/search-node.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleLinkedListComponent,
    NavComponent,
    StackLinkedlistComponent,
    SingleNodeComponent,
    AddNodeComponent,
    DeleteNodeComponent,
    SearchNodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
