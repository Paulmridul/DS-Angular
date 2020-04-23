import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackLinkedlistComponent } from './stack-linkedlist.component';

describe('StackLinkedlistComponent', () => {
  let component: StackLinkedlistComponent;
  let fixture: ComponentFixture<StackLinkedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackLinkedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackLinkedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
