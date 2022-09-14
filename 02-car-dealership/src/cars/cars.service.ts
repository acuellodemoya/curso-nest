import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

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

    public create(createCarDto: CreateCarDto){
        
        const newCar: Car = {
            id: uuid(),
            ...createCarDto
            //brand: createCarDto.brand,
            //model: createCarDto.model
        }
        this.cars.push(newCar)

        return newCar
    }

    public update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findOneById(id)
        this.cars = this.cars.map(car => {
            
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }

                return carDB
            }
            return car
        })
        return carDB
    }

    public delete(id: string){
        let carDB = this.findOneById(id)
        this.cars = this.cars.filter(car => car.id !== id)
    }

}
