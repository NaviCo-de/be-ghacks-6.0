// src/sanggar-tari/sanggar-tari.module.ts
import { Module } from '@nestjs/common';
import { SanggarTariService } from './sanggar-tari.service';
import { SanggarTariController } from './sanggar-tari.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // Sesuaikan path

@Module({
  imports: [PrismaModule],
  controllers: [SanggarTariController],
  providers: [SanggarTariService],
  exports: [SanggarTariService], // Opsional, jika modul lain perlu menggunakannya
})
export class SanggarTariModule {}