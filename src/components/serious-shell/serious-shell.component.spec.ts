/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeriousShellComponent } from './serious-shell.component';

describe('SeriousShellComponent', () => {
  let component: SeriousShellComponent;
  let fixture: ComponentFixture<SeriousShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriousShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriousShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
