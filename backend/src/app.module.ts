import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ForumModule } from './forum/forum.module';
import { AiModule } from './ai/ai.module';
import { SanggarTariModule } from './sanggar-tari/sanggar-tari.module';
@Module({
  imports: [
    AuthModule,
    ForumModule,
    AiModule,
    SanggarTariModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
