import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetrfandkzComponent } from './meetrfandkz.component';

describe('MeetrfandkzComponent', () => {
  let component: MeetrfandkzComponent;
  let fixture: ComponentFixture<MeetrfandkzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetrfandkzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetrfandkzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
