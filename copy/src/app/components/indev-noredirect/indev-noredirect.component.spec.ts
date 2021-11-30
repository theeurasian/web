import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndevNoredirectComponent } from './indev-noredirect.component';

describe('IndevNoredirectComponent', () => {
  let component: IndevNoredirectComponent;
  let fixture: ComponentFixture<IndevNoredirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndevNoredirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndevNoredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
