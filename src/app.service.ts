import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService,
  ) {}
  getHello(): string {
    const apikey = this.config.get<string>('API_KEY');
    const name = this.config.get('DATABASE_NAME');
    return `Hello World! ${apikey} ${name}`;
  }
}
