/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RENDERComponent } from './RENDER.component';

describe('RENDERComponent', () => {
  let component: RENDERComponent;
  let fixture: ComponentFixture<RENDERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RENDERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RENDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
