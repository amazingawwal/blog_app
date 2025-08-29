// import { PartialType } from '@nestjs/mapped-types';
// import { CreateArticleDto } from './create-article.dto';

// export class UpdateArticleDto extends PartialType(CreateArticleDto) {}

import { ApiProperty } from '@nestjs/swagger';

export class UpdateArticleDto {
   @ApiProperty({ example: 'Article ID- Auto-generated' })
  id: number;

  @ApiProperty({ example: 'Article Title: Getting Started with NestJS' })
  title: string;

  @ApiProperty({ example: 'Content: This is an introduction to NestJS framework...' })
  content: string;

  @ApiProperty({ example: 'Date: 12/12/2030' })
  createdAt: Date;

  @ApiProperty({ example: 'Date: 12/12/2030' })
  updatedAt: Date;
}