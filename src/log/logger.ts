import * as log4js from 'log4js';
import loggerConfig from '../config/logger.config';
log4js.configure(loggerConfig);

type appLog = (key: string, message: string) => void;

export const console = log4js.getLogger();
export const system = log4js.getLogger('system');
export const access = log4js.getLogger('access');

// アプリケーションロガー拡張
class ApplicationLogger {
  logger: log4js.Logger;
  trace: appLog;
  debug: appLog;
  info: appLog;
  warn: appLog;
  error: appLog;
  fatal: appLog;

  constructor() {
    this.logger = log4js.getLogger('application');

    this.trace = (key: string, message: string) => {
      const logger = this.logger;
      logger.addContext('key', key);
      logger['trace'](message);
    };
    this.debug = (key: string, message: string) => {
      const logger = this.logger;
      logger.addContext('key', key);
      logger['debug'](message);
    };
    this.info = (key: string, message: string) => {
      const logger = this.logger;
      logger.addContext('key', key);
      logger['info'](message);
    };
    this.warn = (key: string, message: string) => {
      const logger = this.logger;
      logger.addContext('key', key);
      logger['warn'](message);
    };
    this.error = (key: string, message: string) => {
      const logger = this.logger;
      logger.addContext('key', key);
      logger['error'](message);
    };
    this.fatal = (key: string, message: string) => {
      const logger = this.logger;
      logger.addContext('key', key);
      logger['fatal'](message);
    };
  }
}
export const application = new ApplicationLogger();
