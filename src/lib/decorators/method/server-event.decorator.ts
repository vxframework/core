import { Reflector } from '../../reflector';
import { IS_SERVER, LOCAL_EVENT, NET_EVENT } from '../../../const';
import { EventMetadata } from '../../../types';

export const ServerEvent =
  (event: string): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<EventMetadata>(
      target,
      IS_SERVER ? LOCAL_EVENT : NET_EVENT,
      { event, method },
    );
  };
