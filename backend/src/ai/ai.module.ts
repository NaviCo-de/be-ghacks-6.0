import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

@Module({
  imports: [HttpModule], // to make HTTP requests
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}