import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotolibraryComponent } from './photolibrary.component';

describe('PhotolibraryComponent', () => {
  let component: PhotolibraryComponent;
  let fixture: ComponentFixture<PhotolibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotolibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotolibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
