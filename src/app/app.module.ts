import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


import { VehicleService } from './services/Vehicle.service';
import { VehicleListComponent } from './component/vehicle-list/Vehicle-list.component';
import { VehicleSaveComponent } from './component/vehicle-save/vehicle-save.component';
import { VehicleEditComponent } from './component/vehicle-edit/vehicle-edit.component';
import { VehicleDeleteComponent } from './component/vehicle-delete/vehicle-delete.component'

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleSaveComponent,
    VehicleEditComponent,
    VehicleDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
