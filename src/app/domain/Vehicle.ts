export class Vehicle {
    constructor(
        public id: number, 
        public idVehicleType: number, 
        public model: number,
        public licensePlate: string, 
        public color: string,
        public numberPassengers: number, 
        public photo: string, 
        public dataVehicleType: string
        ){}
}
