/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FocusService } from './focus.service';

describe('Service: Focus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FocusService]
    });
  });

  it('should ...', inject([FocusService], (service: FocusService) => {
    expect(service).toBeTruthy();
  }));
});