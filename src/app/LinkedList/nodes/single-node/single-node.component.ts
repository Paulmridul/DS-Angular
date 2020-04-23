import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-single-node',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        'background-color': 'crimson'
      })),
      state('closed', style({
        'background-color': 'cornflowerblue'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './single-node.component.html',
  styleUrls: ['./single-node.component.css']
})
export class SingleNodeComponent implements OnInit {
  @Input() nodeData: number;
  isNew: boolean;
  constructor() { }

  ngOnInit(): void {
    // this.nodeData = 10;
    this.isNew = true;
    setInterval(() => {
      this.isNew = false;
    }, 1000);
  }

}
