import { TestBed } from '@angular/core/testing';

import { YoutubersServiceService } from './youtubers-service.service';

describe('YoutubersServiceService', () => {
  let service: YoutubersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
