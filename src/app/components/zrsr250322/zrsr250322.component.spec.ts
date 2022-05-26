import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zrsr250322Component } from './zrsr250322.component';

describe('Zrsr250322Component', () => {
  let component: Zrsr250322Component;
  let fixture: ComponentFixture<Zrsr250322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zrsr250322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zrsr250322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
