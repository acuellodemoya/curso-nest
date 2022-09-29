import { IsOptional, IsString, IsMongoId } from "class-validator";


export class UpdateCarDto {

    @IsString()
    @IsMongoId()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsOptional()
    readonly brand?: string

    @IsString()
    @IsOptional()
    readonly model?: string
}