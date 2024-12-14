/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UPSCALEComponent } from './UPSCALE.component';

describe('UPSCALEComponent', () => {
  let component: UPSCALEComponent;
  let fixture: ComponentFixture<UPSCALEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPSCALEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPSCALEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
