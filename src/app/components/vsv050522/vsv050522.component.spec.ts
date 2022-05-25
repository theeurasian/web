import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vsv050522Component } from './vsv050522.component';

describe('Vsv050522Component', () => {
  let component: Vsv050522Component;
  let fixture: ComponentFixture<Vsv050522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vsv050522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vsv050522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
