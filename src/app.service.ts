import { Injectable } from '@nestjs/common';
import configuration from './config/configuration';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Application "' + String(configuration().app.name) + '" is running.';
  }
}
