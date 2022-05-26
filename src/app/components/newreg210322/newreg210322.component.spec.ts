import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newreg210322Component } from './newreg210322.component';

describe('Newreg210322Component', () => {
  let component: Newreg210322Component;
  let fixture: ComponentFixture<Newreg210322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newreg210322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newreg210322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
