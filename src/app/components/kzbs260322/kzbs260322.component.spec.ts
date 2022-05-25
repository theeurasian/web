import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kzbs260322Component } from './kzbs260322.component';

describe('Kzbs260322Component', () => {
  let component: Kzbs260322Component;
  let fixture: ComponentFixture<Kzbs260322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kzbs260322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kzbs260322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
