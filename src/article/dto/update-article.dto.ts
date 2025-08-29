// import { PartialType } from '@nestjs/mapped-types';
// import { CreateArticleDto } from './create-article.dto';

// export class UpdateArticleDto extends PartialType(CreateArticleDto) {}

export class UpdateArticleDto {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
