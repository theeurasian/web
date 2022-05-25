import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lch250522Component } from './lch250522.component';

describe('Lch250522Component', () => {
  let component: Lch250522Component;
  let fixture: ComponentFixture<Lch250522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lch250522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lch250522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
