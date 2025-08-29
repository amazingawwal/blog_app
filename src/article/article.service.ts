import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return await this.prisma.article.create({ data });
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.prisma.article.findMany();
    console.log(articles);
    return articles;
  }

  async findOne(id: number): Promise<Article> {
    const result = await this.prisma.article.findUnique({
      where: {
        id,
      },
    });
    if (!result) {
      throw new NotFoundException(
        `Invalid ID: ${id}, The required article is not found`,
      );
    }
    return result;
  }

  // async update(id: number, data: Article): Promise<Article> {
  //   try{
  //     const result = await this.prisma.article.update({
  //       where:{
  //         id
  //       },
  //       data
  //     })
  //     if(!result){
  //       throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  //     }
  //     return result;
  //   }
  //   catch(e){
  //     return e
  //   }
  // }

  async update(id: number, data: Article): Promise<Article> {
    try {
      const result = await this.prisma.article.update({
        where: {
          id,
        },
        data,
      });
      return result;
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: e,
        },
      );
    }
  }

  async remove(id: number) {
    return await this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
