import { TestBed } from '@angular/core/testing';

import { PdfFormDataService } from './pdf-form-data.service';

describe('PdfFormDataService', () => {
  let service: PdfFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
