import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiOperation({
    summary: 'API名称、状態をOUTPUT',
    description: 'API名称、状態をOUTPUTします。',
  })
  @ApiOkResponse({
    description: 'API名称、状態のOUTPUT 成功',
    schema: {
      type: 'string',
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
