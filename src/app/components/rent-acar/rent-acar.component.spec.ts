import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAcarComponent } from './rent-acar.component';

describe('RentAcarComponent', () => {
  let component: RentAcarComponent;
  let fixture: ComponentFixture<RentAcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentAcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentAcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
