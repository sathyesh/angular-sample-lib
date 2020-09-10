import { TestBed } from '@angular/core/testing';

import { LibTranslateService } from './lib-translate.service';

describe('TranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTranslateService = TestBed.get(LibTranslateService);
    expect(service).toBeTruthy();
  });
});
