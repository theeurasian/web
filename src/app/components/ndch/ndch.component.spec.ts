import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdchComponent } from './ndch.component';

describe('NdchComponent', () => {
  let component: NdchComponent;
  let fixture: ComponentFixture<NdchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
