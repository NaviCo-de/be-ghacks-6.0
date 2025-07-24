// src/forum/forum.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { ForumPost } from '@prisma/client';

@Injectable()
export class ForumService {
    constructor(private prisma: PrismaService) {}

    async create(userId: string, createForumPostDto: CreateForumPostDto): Promise<ForumPost> {
    const { title, content } = createForumPostDto;
        return this.prisma.forumPost.create({
            data: {
            title,
            content,
            author: {
            connect: { id: userId },
            },
        },
    });
    }
}