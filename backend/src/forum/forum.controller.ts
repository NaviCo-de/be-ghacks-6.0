// src/forum/forum.controller.ts
import { Controller, Post, Body, Req, UseGuards, Get } from '@nestjs/common'; // Hapus UsePipes, ValidationPipe, Param, NotFoundException, Put, Delete, HttpStatus, HttpCode
import { ForumService } from './forum.service';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Sesuaikan path ke JwtAuthGuard Anda
import { Request } from 'express';
import { ForumPost } from '@prisma/client';
import { UUID } from 'crypto';

@Controller('forum')
// Hapus @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class ForumController {
    constructor(private readonly forumService: ForumService) {}

    @Get('main')
    async getAll() {
        return this.forumService.findAll();
    }

    @Post('post')
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() createForumPostDto: CreateForumPostDto,
        @Req() req
    ): Promise<ForumPost> {
        const userId = req.user.userId;
        return this.forumService.create(userId, createForumPostDto);
    }

  // Semua endpoint GET, PUT, dan DELETE telah dihapus
}