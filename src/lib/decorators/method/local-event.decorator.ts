import { Reflector } from '../../reflector';
import { LOCAL_EVENT } from '../../../const';
import { EventMetadata } from '../../../types';

export const LocalEvent =
  (event: string): MethodDecorator =>
  (target, method: string): void => {
    console.warn(
      `@LocalEvent() decorator is deprecated. Use @ClientEvent() on client or @ServerEvent() on server`,
    );
    Reflector.extend<EventMetadata>(target, LOCAL_EVENT, { event, method });
  };
