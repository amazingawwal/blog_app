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

  async update(id: number, data: Article): Promise<Article> {
    try {
      const result = await this.prisma.article.update({
        where: {
          id,
        },
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Invalid ID, could not update your article. Check the input ID and try again ',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async remove(id: number) {
    try{
     await this.prisma.article.delete({
      where: {
        id,
      },
    });
    console.log(`Article with ID: ${id} successfully deleted`)
  }
  catch(e){
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: `Error: Could not found ID: ${id}. No Article deleted. `,
    }, HttpStatus.FORBIDDEN, {
      cause: e
    });
  }
  }
}
