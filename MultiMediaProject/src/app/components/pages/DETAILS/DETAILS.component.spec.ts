/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DETAILSComponent } from './DETAILS.component';

describe('DETAILSComponent', () => {
  let component: DETAILSComponent;
  let fixture: ComponentFixture<DETAILSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DETAILSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
