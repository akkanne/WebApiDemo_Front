import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/domain/Vehicle';
import { VehicleService } from 'src/app/services/Vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent {
  public id: any = 0;
  public vehicle: Vehicle = new Vehicle(0,0,0,'','',0,'','');
  public subVehicle: Subscription = new Subscription;
  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public vehicleService: VehicleService , 
    private router: Router,
    private activateRouter: ActivatedRoute ){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.findById();
    }

    ngOnDestroy(): void {
      this.subVehicle.unsubscribe();
    }
  
    public findById() {
      let param = this.activateRouter.snapshot.paramMap.get('id');
      console.log(param);
      this.id = param;

      this.subVehicle = this.vehicleService.getById(this.id).subscribe(data => {
        this.vehicle = data
      });
    }

    public edit(): void{
    
      console.log(this.vehicle);
  
      this.vehicleService.edit(this.vehicle).subscribe(data => {
        this.router.navigate(['/vehicle-list']);
      }, error => {
        console.log(error);
        this.showMsg = true;
        this.type = 'danger';
        this.showError(error.message);
      });
    }
  
    public showError(res: any) {
      this.msg = res;
    }

}
