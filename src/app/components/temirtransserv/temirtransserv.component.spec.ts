import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemirtransservComponent } from './temirtransserv.component';

describe('TemirtransservComponent', () => {
  let component: TemirtransservComponent;
  let fixture: ComponentFixture<TemirtransservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemirtransservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemirtransservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
