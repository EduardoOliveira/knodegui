/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DelugeServiceService } from './deluge-service.service';

describe('DelugeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelugeServiceService]
    });
  });

  it('should ...', inject([DelugeServiceService], (service: DelugeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
