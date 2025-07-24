// src/forum/forum.module.ts
import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { PrismaModule } from '../prisma/prisma.module';
// import { AuthModule } from '../auth/auth.module'; // Import modul Auth Anda jika diperlukan oleh JwtAuthGuard

@Module({
    imports: [
        PrismaModule,
        // AuthModule,
    ],
    controllers: [ForumController],
    providers: [ForumService],
})
export class ForumModule {}