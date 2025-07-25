// src/forum/dto/create-forum-post.dto.ts
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateForumPostDto {
  @IsString()
  @IsNotEmpty()
  post: string;
}