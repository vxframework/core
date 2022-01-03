import { IMetadataReader } from '../../interfaces';
import { Reflector } from '../reflector';
import { EventMetadata } from '../../types';
import { LOCAL_EVENT } from '../../const';
import { Logger } from '../logger';
import { Injectable } from '../decorators';

@Injectable()
export class LocalEventReader implements IMetadataReader {
  public static log = true;

  private logger = new Logger('LocalEvent');

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const events = Reflector.get<EventMetadata[]>(target, LOCAL_EVENT) || [];
    events.forEach(({ method, event }) => {
      global.on?.(event, target[method].bind(target));
      if (!LocalEventReader.log) {
        return null;
      }
      this.logger.success(
        `Event [${event}] is bound to ${controllerName}.${method}`,
      );
    });
  }
}
