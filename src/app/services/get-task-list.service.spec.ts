import { TestBed } from '@angular/core/testing';

import { GetTaskListService } from './get-task-list.service';

describe('GetTaskListService', () => {
  let service: GetTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
