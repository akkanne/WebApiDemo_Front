import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vehicle } from 'src/app/domain/Vehicle';
import { VehicleService } from 'src/app/services/Vehicle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit, OnDestroy {

  public vehicles: Vehicle[] | undefined;
  public subVehicle: Subscription = new Subscription;

  constructor(public vehicleService: VehicleService){}

  ngOnDestroy(): void {
    this.subVehicle.unsubscribe();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAll();
  }

  public getAll(){
    this.subVehicle = this.vehicleService.getAll().subscribe(data => {
      this.vehicles = data; 
    });
  }
}
