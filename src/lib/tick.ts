export class Tick {
  private tickHandle: number | NodeJS.Timer;
  private isRunning = false;
  private isPaused = false;

  constructor(
    private readonly callback: (...args: unknown[]) => unknown,
    private readonly interval: number = 0,
  ) {}

  public start(): void {
    if (this.isRunning) {
      return null;
    }
    if (this.isPaused) {
      return null;
    }
    this.isRunning = true;
    this.tickHandle =
      this.interval > 0
        ? setInterval(this.callback, this.interval)
        : global.setTick(this.callback);
  }

  public stop(): void {
    if (!this.isRunning) {
      return null;
    }
    if (this.isPaused) {
      return null;
    }
    this.isRunning = false;
    if (typeof this.tickHandle === 'number') {
      global.clearTick(this.tickHandle);
    } else {
      clearInterval(this.tickHandle);
    }
    delete this.tickHandle;
  }

  public pause(time: number): void {
    if (time < 0) {
      throw new Error('Cannot pause tick for negative interval');
    }
    this.stop();
    this.isPaused = true;
    setTimeout(() => {
      this.isPaused = false;
      this.start();
    }, time);
  }
}
