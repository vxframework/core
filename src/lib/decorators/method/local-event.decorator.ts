import { Reflector } from '../../reflector';
import { LOCAL_EVENT } from '../../../const';
import { EventMetadata } from '../../../types';

export const LocalEvent =
  (event: string): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<EventMetadata>(target, LOCAL_EVENT, { event, method });
  };
