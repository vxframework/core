import { Reflector } from '../../reflector';
import { NET_EVENT } from '../../../const';
import { EventMetadata } from '../../../types';

export const NetEvent =
  (event: string): MethodDecorator =>
  (target, method: string): void => {
    console.warn(
      `@NetEvent() decorator is deprecated. Use @ServerEvent() on client or @ClientEvent() on server`,
    );
    Reflector.extend<EventMetadata>(target, NET_EVENT, { event, method });
  };
