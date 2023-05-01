import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './component/vehicle-list/Vehicle-list.component';
import { VehicleSaveComponent } from './component/vehicle-save/vehicle-save.component';
import { VehicleEditComponent } from './component/vehicle-edit/vehicle-edit.component';
import { VehicleDeleteComponent } from './component/vehicle-delete/vehicle-delete.component';

const routes: Routes = [
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'vehicle-save', component: VehicleSaveComponent },
  { path: 'vehicle-edit/:id', component: VehicleEditComponent },
  { path: 'vehicle-delete/:id', component: VehicleDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
