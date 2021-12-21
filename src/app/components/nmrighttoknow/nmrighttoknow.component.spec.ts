import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmrighttoknowComponent } from './nmrighttoknow.component';

describe('NmrighttoknowComponent', () => {
  let component: NmrighttoknowComponent;
  let fixture: ComponentFixture<NmrighttoknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmrighttoknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmrighttoknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
