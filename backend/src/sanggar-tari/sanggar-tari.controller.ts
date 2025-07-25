// src/sanggar-tari/sanggar-tari.controller.ts
import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  // ... impor lainnya
} from '@nestjs/common';
import { SanggarTariService } from './sanggar-tari.service';
import { GetNearestSanggarDto } from './dto/get-nearest-sanggar.dto';
import { SanggarTari } from '@prisma/client';

@Controller('sanggar-tari')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
export class SanggarTariController {
  constructor(private readonly sanggarTariService: SanggarTariService) {}

  @Get('nearest') // Endpoint: GET /sanggar-tari/nearest
  async getNearestSanggar(
    @Query() query: GetNearestSanggarDto,
  ): Promise<(SanggarTari & { distance?: number })[]> {
    try {
      const nearestSanggar = await this.sanggarTariService.findNearestSanggar(query);
      if (nearestSanggar.length === 0) {
        throw new HttpException(
          'Tidak ada sanggar tari dengan koordinat yang ditemukan.',
          HttpStatus.NOT_FOUND,
        );
      }
      return nearestSanggar;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Terjadi kesalahan saat mencari sanggar terdekat.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}