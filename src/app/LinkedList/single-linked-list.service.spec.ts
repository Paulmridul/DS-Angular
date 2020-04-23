import { TestBed } from '@angular/core/testing';

import { SingleLinkedListService } from './single-linked-list.service';

describe('SingleLinkedListService', () => {
  let service: SingleLinkedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleLinkedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
