import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid'

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'Optra'
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Fiesta'
        }
    ]

    public findAll(){
        return this.cars
    }

    public findOneById(id: string){
        const car = this.cars.find(car => car.id === id)
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`)
        return car
    }

}
