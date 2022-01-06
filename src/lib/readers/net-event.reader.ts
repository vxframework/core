import { IMetadataReader } from '../../interfaces';
import { Reflector } from '../reflector';
import { EventMetadata } from '../../types';
import { NET_EVENT } from '../../const';
import { Logger } from '../logger';
import { Injectable, PostConstruct } from '../decorators';

@Injectable()
export class NetEventReader implements IMetadataReader {
  public static log = true;

  private logger = new Logger('NetEvent');

  @PostConstruct()
  private deprecate(): void {
    console.warn(`NetEventReader is deprecated. Use EventReader`);
  }

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const events = Reflector.get<EventMetadata[]>(target, NET_EVENT) || [];

    Reflect.deleteMetadata(NET_EVENT, target);

    events.forEach(({ method, event }) => {
      global.onNet?.(event, target[method].bind(target));
      if (!NetEventReader.log) {
        return null;
      }
      this.logger.success(
        `Net event [${event}] is bound to ${controllerName}.${method}`,
      );
    });
  }
}
