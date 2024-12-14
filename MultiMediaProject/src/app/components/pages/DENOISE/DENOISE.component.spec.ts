/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DENOISEComponent } from './DENOISE.component';

describe('DENOISEComponent', () => {
  let component: DENOISEComponent;
  let fixture: ComponentFixture<DENOISEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DENOISEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DENOISEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
