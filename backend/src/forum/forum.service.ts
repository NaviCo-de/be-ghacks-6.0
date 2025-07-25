// src/forum/forum.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { ForumPost } from '@prisma/client';
import { UUID } from 'crypto';

@Injectable()
export class ForumService {
    constructor(private prisma: PrismaService) {}
    
    async create(userId: UUID, createForumPostDto: CreateForumPostDto): Promise<ForumPost> {
        
        const { post } = createForumPostDto;
            return this.prisma.forumPost.create({
                data: {
                post,
                writerId: userId
            },
        });
    }

    async findAll() {
        return this.prisma.forumPost.findMany({
            include: {
                writer: true,
            },
            orderBy: {
                tanggalDibuat: 'desc'
            } as any
        })
    }
}