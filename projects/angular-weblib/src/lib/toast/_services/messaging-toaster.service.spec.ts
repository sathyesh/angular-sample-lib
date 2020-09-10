import { inject, TestBed } from '@angular/core/testing';
import { MessagingToasterService } from './messaging-toaster.service';

describe('MessagingToasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [MessagingToasterService]
    });
  });

  it('should be created', inject([MessagingToasterService], (service: MessagingToasterService) => {
    expect(service).toBeTruthy();
  }));
});
