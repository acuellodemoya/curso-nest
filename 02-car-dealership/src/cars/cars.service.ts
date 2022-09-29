import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car as CarSchema, CarDocument } from './schema/car.schema';

@Injectable()
export class CarsService {

    constructor(
        @InjectModel(CarSchema.name) private carModel: Model<CarDocument>
    ){}

    private cars: Car[] = [
        //{
        //    id: uuid(),
        //    brand: 'Toyota',
        //    model: 'Corolla'
        //}
    ]

    public async findAll(){
        return await this.carModel.find()
    }

    public async findOneById(id: string){
        return await this.carModel.findById(id)
    }

    public async create(createCarDto: CreateCarDto): Promise<CarSchema> {
        
        const createdCar = new this.carModel(createCarDto)
        return createdCar.save()
    }

    public async update(id: string, updateCarDto: UpdateCarDto){

        const updatedCar = await this.carModel.findByIdAndUpdate(
            id,
            updateCarDto,
            {new: true}
        )
        return updatedCar
    }

    public delete(id: string){
        let carDB = this.findOneById(id)
        this.cars = this.cars.filter(car => car.id !== id)
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }

}
