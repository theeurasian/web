import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Akgl250322Component } from './akgl250322.component';

describe('Akgl250322Component', () => {
  let component: Akgl250322Component;
  let fixture: ComponentFixture<Akgl250322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Akgl250322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Akgl250322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
