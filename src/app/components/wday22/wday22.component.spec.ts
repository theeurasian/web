import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wday22Component } from './wday22.component';

describe('Wday22Component', () => {
  let component: Wday22Component;
  let fixture: ComponentFixture<Wday22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wday22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wday22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
