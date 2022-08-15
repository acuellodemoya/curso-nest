import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Chevrolet',
            model: 'Optra'
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Fiesta'
        }
    ]

    public findAll(){
        return this.cars
    }

    public findOneById(id: number){
        const car = this.cars.find(car => car.id === id)
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`)
        return car
    }

}
