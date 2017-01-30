/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DelugeComponent } from './deluge.component';

describe('DelugeComponent', () => {
  let component: DelugeComponent;
  let fixture: ComponentFixture<DelugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
