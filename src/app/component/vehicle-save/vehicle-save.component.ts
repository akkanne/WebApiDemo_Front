import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from 'src/app/domain/Vehicle';
import { VehicleService } from 'src/app/services/Vehicle.service';


@Component({
  selector: 'app-vehicle-save',
  templateUrl: './vehicle-save.component.html',
  styleUrls: ['./vehicle-save.component.css']
})
export class VehicleSaveComponent implements OnInit {

  public vehicle: Vehicle = new Vehicle(0,0,0,'','',0,'','');
  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public vehicleService: VehicleService, 
    private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  public save(): void{
    
    console.log(this.vehicle);

    this.vehicleService.save(this.vehicle).subscribe(data => {
      this.router.navigate(['/vehicle-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.type = 'danger';
      this.showError(error);
    });
  }

  public showError(res: any) {
    this.msg = res;
  }
}
