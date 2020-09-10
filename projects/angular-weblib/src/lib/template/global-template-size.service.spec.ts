import { inject, TestBed } from '@angular/core/testing';

import { GlobalTemplateSizeService } from './global-template-size.service';


describe('GlobalTemplateSizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        GlobalTemplateSizeService
      ]
    });
  });

  it('should be created', inject([GlobalTemplateSizeService], (service: GlobalTemplateSizeService) => {
    expect(service).toBeTruthy();
  }));
});
