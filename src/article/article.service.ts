import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticleService {

  constructor(private prisma:PrismaService){}

  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return await this.prisma.article.create({data})
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
