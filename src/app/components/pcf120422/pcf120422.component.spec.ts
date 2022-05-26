import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcf120422Component } from './pcf120422.component';

describe('Pcf120422Component', () => {
  let component: Pcf120422Component;
  let fixture: ComponentFixture<Pcf120422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pcf120422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pcf120422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
