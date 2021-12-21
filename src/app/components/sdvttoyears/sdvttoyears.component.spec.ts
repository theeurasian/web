import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdvttoyearsComponent } from './sdvttoyears.component';

describe('SdvttoyearsComponent', () => {
  let component: SdvttoyearsComponent;
  let fixture: ComponentFixture<SdvttoyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdvttoyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdvttoyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
