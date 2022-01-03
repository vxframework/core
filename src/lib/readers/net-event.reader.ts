import { IMetadataReader } from '../../interfaces';
import { Reflector } from '../reflector';
import { EventMetadata } from '../../types';
import { NET_EVENT } from '../../const';
import { Logger } from '../logger';
import { Injectable } from '../decorators';

@Injectable()
export class NetEventReader implements IMetadataReader {
  public static log = true;

  private logger = new Logger('NetEvent');

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const events = Reflector.get<EventMetadata[]>(target, NET_EVENT) || [];
    events.forEach(({ method, event }) => {
      global.on?.(event, target[method].bind(target));
      if (!NetEventReader.log) {
        return null;
      }
      this.logger.success(
        `Net event [${event}] is bound to ${controllerName}.${method}`,
      );
    });
  }
}
