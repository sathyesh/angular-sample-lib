import { inject, TestBed } from '@angular/core/testing';

import { MessagingModalService } from './messaging-modal.service';


describe('MessagingModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        MessagingModalService]
    });
  });

  it('should be created', inject([MessagingModalService], (service: MessagingModalService) => {
    expect(service).toBeTruthy();
  }));
});
