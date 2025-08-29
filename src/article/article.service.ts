import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';
import { error } from 'console';

@Injectable()
export class ArticleService {

  constructor(private prisma:PrismaService){}

  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return await this.prisma.article.create({data})
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.prisma.article.findMany()
    console.log(articles)
    return articles
  }

  async findOne(id: number):Promise<Article> {

    const result = await this.prisma.article.findUnique({
      where:{
        id
      }
    });
    if (!result){
      throw error;
    }
    return result
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
