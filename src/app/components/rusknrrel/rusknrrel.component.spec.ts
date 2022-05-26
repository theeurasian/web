import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RusknrrelComponent } from './rusknrrel.component';

describe('RusknrrelComponent', () => {
  let component: RusknrrelComponent;
  let fixture: ComponentFixture<RusknrrelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RusknrrelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RusknrrelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
