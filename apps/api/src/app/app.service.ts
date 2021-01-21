import { Injectable } from '@nestjs/common';
import { Message } from '@spine-z/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
