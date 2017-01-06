/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuItemsService } from './menu-items.service';

describe('MenuItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuItemsService]
    });
  });

  it('should ...', inject([MenuItemsService], (service: MenuItemsService) => {
    expect(service).toBeTruthy();
  }));
});
