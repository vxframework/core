import { Reflector } from '../../reflector';
import { IS_SERVER, LOCAL_EVENT, NET_EVENT } from '../../../const';
import { EventMetadata } from '../../../types';

export const ClientEvent =
  (event: string): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<EventMetadata>(
      target,
      IS_SERVER ? NET_EVENT : LOCAL_EVENT,
      { event, method },
    );
  };
