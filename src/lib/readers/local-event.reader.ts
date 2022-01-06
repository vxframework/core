import { IMetadataReader } from '../../interfaces';
import { Reflector } from '../reflector';
import { EventMetadata } from '../../types';
import { LOCAL_EVENT } from '../../const';
import { Logger } from '../logger';
import { Injectable, PostConstruct } from '../decorators';

@Injectable()
export class LocalEventReader implements IMetadataReader {
  public static log = true;

  private logger = new Logger('LocalEvent');

  @PostConstruct()
  private deprecate(): void {
    console.warn(`LocalEventReader is deprecated. Use EventReader`);
  }

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const events = Reflector.get<EventMetadata[]>(target, LOCAL_EVENT) || [];
    Reflect.deleteMetadata(LOCAL_EVENT, target);
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
