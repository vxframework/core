import { ILogger } from '../interfaces';
import { CURRENT_RESOURCE, IS_SERVER } from '../const';

type LogType = {
  title: string;
  color: string;
};

export interface ILoggerConstructor {
  new (prefix: string): ILogger;
}

export const Logger = ((): ILoggerConstructor => {
  if (IS_SERVER) {
    return class Logger implements ILogger {
      private static LogTypes: { [p: string]: LogType } = {
        Log: { title: 'LOG', color: '\x1b[0m' },
        Info: { title: 'INFO', color: '\x1b[36m' },
        Debug: { title: 'DEBUG', color: '\x1b[94m' },
        Warning: { title: 'WARNING', color: '\x1b[33m' },
        Success: { title: 'SUCCESS', color: '\x1b[32m' },
        Error: { title: 'ERROR', color: '\x1b[31m' },
      };

      private static RESOURCE = CURRENT_RESOURCE;

      constructor(private readonly prefix: string) {}

      private static get time(): string {
        return new Date().toLocaleString();
      }

      private format(type: LogType, msg: string): string {
        return `\x1b[46m\x1b[30m[resource:script:${Logger.RESOURCE}]\x1b[0m ${type.color}[${type.title}] [${Logger.time}] [${this.prefix}] ${msg} \x1b[0m\n`;
      }

      public log(...message: string[]): void {
        message.forEach(msg => {
          process.stdout.write(this.format(Logger.LogTypes.Log, msg));
        });
      }

      public info(...message: string[]): void {
        message.forEach(msg => {
          process.stdout.write(this.format(Logger.LogTypes.Info, msg));
        });
      }

      public debug(...message: string[]): void {
        message.forEach(msg => {
          process.stdout.write(this.format(Logger.LogTypes.Debug, msg));
        });
      }

      public warning(...message: string[]): void {
        message.forEach(msg => {
          process.stdout.write(this.format(Logger.LogTypes.Warning, msg));
        });
      }

      public success(...message: string[]): void {
        message.forEach(msg => {
          process.stdout.write(this.format(Logger.LogTypes.Success, msg));
        });
      }

      public error(...message: string[]): void {
        message.forEach(msg => {
          process.stdout.write(this.format(Logger.LogTypes.Error, msg));
        });
      }
    };
  } else {
    return class Logger implements ILogger {
      private static LogTypes: { [p: string]: LogType } = {
        Log: { title: 'LOG', color: '^7' },
        Info: { title: 'INFO', color: '\x1b[36m' },
        Debug: { title: 'DEBUG', color: '\x1b[94m' },
        Warning: { title: 'WARNING', color: '\x1b[33m' },
        Success: { title: 'SUCCESS', color: '\x1b[32m' },
        Error: { title: 'ERROR', color: '\x1b[31m' },
      };

      private static RESOURCE = global.GetCurrentResourceName();

      constructor(private readonly prefix: string) {}

      private static get time(): string {
        return new Date().toLocaleString();
      }

      private format(type: LogType, msg: string): string {
        return `${type.color}[${type.title}] [${Logger.time}] [${this.prefix}] ${msg} ^r\n`;
      }

      public log(...message: string[]): void {
        message.forEach(msg => {
          console.log(this.format(Logger.LogTypes.Log, msg));
        });
      }

      public info(...message: string[]): void {
        message.forEach(msg => {
          console.log(this.format(Logger.LogTypes.Info, msg));
        });
      }

      public debug(...message: string[]): void {
        message.forEach(msg => {
          console.log(this.format(Logger.LogTypes.Debug, msg));
        });
      }

      public warning(...message: string[]): void {
        message.forEach(msg => {
          console.log(this.format(Logger.LogTypes.Warning, msg));
        });
      }

      public success(...message: string[]): void {
        message.forEach(msg => {
          console.log(this.format(Logger.LogTypes.Success, msg));
        });
      }

      public error(...message: string[]): void {
        message.forEach(msg => {
          console.log(this.format(Logger.LogTypes.Error, msg));
        });
      }
    };
  }
})();
