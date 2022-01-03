export interface ILogger {
  log(...message: string[]): void;
  info(...message: string[]): void;
  debug(...message: string[]): void;
  warning(...message: string[]): void;
  success(...message: string[]): void;
  error(...message: string[]): void;
}
