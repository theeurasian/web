import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GEnComponent } from './g-en.component';

describe('GEnComponent', () => {
  let component: GEnComponent;
  let fixture: ComponentFixture<GEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
