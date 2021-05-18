import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistingPageComponent } from './productlisting-page.component';

describe('ProductlistingPageComponent', () => {
  let component: ProductlistingPageComponent;
  let fixture: ComponentFixture<ProductlistingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
