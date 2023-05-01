import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../domain/Vehicle';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public url: string;

  constructor(public httpClient: HttpClient) { 
    //this.url = "./assets/MOCK_DATA.json";
    //this.url = 'https://localhost:7114/api/Vehicles/'
    this.url = environment.apiurl+'Vehicles';
  };

  //Method that query all records in the table vechicle
  public getAll(): Observable<any>{
    return this.httpClient.get(this.url) ; 
  };

  //Method that query all records by Id
  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id) ; 
  };
  //Method that save  records in the table vechicle
  public save(vehicle: Vehicle): Observable<any>{
    return this.httpClient.post(this.url, vehicle) ; 
  };

  //Method that modify records in the table vehicle
  public edit(vehicle: Vehicle): Observable<any>{
    return this.httpClient.put(this.url + vehicle.id, vehicle) ; 
  };

  //Method that delete records in the table vehicle
  public delete(id: number) {
    return this.httpClient.delete(this.url + id) ; 
  };

}
