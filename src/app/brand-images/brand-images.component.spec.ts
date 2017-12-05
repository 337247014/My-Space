import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandImagesComponent } from './brand-images.component';

describe('BrandImagesComponent', () => {
  let component: BrandImagesComponent;
  let fixture: ComponentFixture<BrandImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
