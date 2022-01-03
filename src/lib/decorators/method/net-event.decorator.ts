import { Reflector } from '../../reflector';
import { NET_EVENT } from '../../../const';
import { EventMetadata } from '../../../types';

export const NetEvent =
  (event: string): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<EventMetadata>(target, NET_EVENT, { event, method });
  };
