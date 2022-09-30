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

        try{
            const updatedCar = await this.carModel.findByIdAndUpdate(
                id,
                updateCarDto,
                {new: true}
            )
            return updatedCar
        }catch(e){
            return {'error': e.message}
        }
    }

    public async delete(id: string){
        try{
            return await this.carModel.findByIdAndDelete(id, {new: true})
        }catch(e){
            return {'error': e.message}
        }
    }
    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }

}
