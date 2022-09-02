import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductComponent } from './ourproduct.component';

describe('OurproductComponent', () => {
  let component: OurproductComponent;
  let fixture: ComponentFixture<OurproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
