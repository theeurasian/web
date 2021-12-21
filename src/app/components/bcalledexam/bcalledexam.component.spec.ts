import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcalledexamComponent } from './bcalledexam.component';

describe('BcalledexamComponent', () => {
  let component: BcalledexamComponent;
  let fixture: ComponentFixture<BcalledexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcalledexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcalledexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
