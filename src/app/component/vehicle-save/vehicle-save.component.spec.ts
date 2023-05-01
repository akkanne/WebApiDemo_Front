import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSaveComponent } from './vehicle-save.component';

describe('VehicleSaveComponent', () => {
  let component: VehicleSaveComponent;
  let fixture: ComponentFixture<VehicleSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
