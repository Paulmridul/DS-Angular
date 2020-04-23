import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNodeComponent } from './single-node.component';

describe('SingleNodeComponent', () => {
  let component: SingleNodeComponent;
  let fixture: ComponentFixture<SingleNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
