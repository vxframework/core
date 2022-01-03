import { Logger } from '../logger';
import { Reflector } from '../reflector';
import { TickMetadata } from '../../types';
import { TICK } from '../../const';
import { IMetadataReader } from '../../interfaces';

export class TickReader implements IMetadataReader {
  public static log = true;
  private logger = new Logger('Tick');

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const ticks = Reflector.get<TickMetadata[]>(target, TICK) || [];
    ticks.forEach(({ interval, method }) => {
      if (interval < 0) {
        throw new Error(
          `Cannot apply @Tick() decorator with negative interval. ${controllerName}.${method}`,
        );
      }
      if (typeof interval === 'undefined') {
        global.setTick?.(target[method].bind(method));
      } else {
        global.setInterval(target[method].bind(method), interval);
      }
      if (!TickReader.log) {
        return null;
      }
      this.logger.success(`Tick is bound to ${controllerName}.${method}`);
    });
  }
}
