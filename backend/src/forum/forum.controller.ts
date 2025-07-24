// src/forum/forum.controller.ts
import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common'; // Hapus UsePipes, ValidationPipe, Param, NotFoundException, Put, Delete, HttpStatus, HttpCode
import { ForumService } from './forum.service';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Sesuaikan path ke JwtAuthGuard Anda
import { Request } from 'express';
import { ForumPost } from '@prisma/client';

@Controller('forum')
// Hapus @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class ForumController {
    constructor(private readonly forumService: ForumService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() createForumPostDto: CreateForumPostDto,
        @Req() req: Request & { user: { id: string } },
    ): Promise<ForumPost> {
        const userId = req.user.id;
        return this.forumService.create(userId, createForumPostDto);
    }

  // Semua endpoint GET, PUT, dan DELETE telah dihapus
}