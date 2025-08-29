import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greeting(): string {
    return 'Hello you! Welcome to my Blog App';
  }
}
