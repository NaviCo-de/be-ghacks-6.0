// src/sanggar-tari/dto/get-nearest-sanggar.dto.ts
import { IsLatitude, IsLongitude, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class GetNearestSanggarDto {
  @IsLatitude()
  @Type(() => Number)
  userLat: number;

  @IsLongitude()
  @Type(() => Number)
  userLon: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit: number = 10;
}