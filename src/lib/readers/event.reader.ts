import { Injectable } from '../decorators';
import { IMetadataReader } from '../../interfaces';
import { Reflector } from '../reflector';
import { EventMetadata } from '../../types';
import { LOCAL_EVENT, NET_EVENT } from '../../const';
import { Logger } from '../logger';

@Injectable()
export class EventReader implements IMetadataReader {
  private logger = new Logger('Event');

  private static log = true;

  public readNet(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const events = Reflector.get<EventMetadata[]>(target, NET_EVENT) || [];
    Reflect.deleteMetadata(NET_EVENT, target);
    events.forEach(({ method, event }) => {
      global.onNet?.(event, target[method].bind(target));
      if (!EventReader.log) {
        return null;
      }
      this.logger.success(
        `Net event [${event}] is bound to ${controllerName}.${method}`,
      );
    });
  }

  public readLocal(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const events = Reflector.get<EventMetadata[]>(target, LOCAL_EVENT) || [];
    Reflect.deleteMetadata(LOCAL_EVENT, target);
    events.forEach(({ method, event }) => {
      global.on?.(event, target[method].bind(target));
      if (!EventReader.log) {
        return null;
      }
      this.logger.success(
        `Event [${event}] is bound to ${controllerName}.${method}`,
      );
    });
  }

  public read(target: unknown): void {
    this.readNet(target);
    this.readLocal(target);
  }
}
