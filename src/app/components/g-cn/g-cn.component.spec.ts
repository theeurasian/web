import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GCnComponent } from './g-cn.component';

describe('GCnComponent', () => {
  let component: GCnComponent;
  let fixture: ComponentFixture<GCnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GCnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
