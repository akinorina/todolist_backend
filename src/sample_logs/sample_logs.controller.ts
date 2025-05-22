import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { application, console } from 'src/log/logger';

@Controller('sample-logs')
export class SampleLogsController {
  @Get()
  @ApiOperation({
    summary: 'サンプルログ出力',
    description: 'サンプルログ出力します。',
  })
  @ApiOkResponse({
    description: 'サンプルログ出力 成功',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  })
  outputLog(): string {
    //
    application.trace('app', 'application ログ出力 - trace.');
    application.debug('app', 'application ログ出力 - debug.');
    application.info('app', 'application ログ出力 - info.');
    application.warn('app', 'application ログ出力 - warn.');
    application.error('app', 'application ログ出力 - error.');
    application.fatal('app', 'application ログ出力 - fatal.');
    //
    console.trace('console ログ出力 - trace.');
    console.debug('console ログ出力 - trace.');
    console.info('console ログ出力 - trace.');
    console.warn('console ログ出力 - trace.');
    console.error('console ログ出力 - trace.');
    console.fatal('console ログ出力 - trace.');

    return 'output logs successfully.';
  }
}
