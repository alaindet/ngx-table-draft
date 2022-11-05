import { TestBed } from '@angular/core/testing';

import { NgxTwangService } from './ngx-twang.service';

describe('NgxTwangService', () => {
  let service: NgxTwangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTwangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
