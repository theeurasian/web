import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtchComponent } from './mtch.component';

describe('MtchComponent', () => {
  let component: MtchComponent;
  let fixture: ComponentFixture<MtchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
