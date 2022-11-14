import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineArchiveComponent } from './magazine-archive.component';

describe('MagazineArchiveComponent', () => {
  let component: MagazineArchiveComponent;
  let fixture: ComponentFixture<MagazineArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
