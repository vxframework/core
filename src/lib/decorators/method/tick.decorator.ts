import { Reflector } from '../../reflector';
import { TickMetadata } from '../../../types';
import { TICK } from '../../../const';

export const OnTick =
  (interval?: number): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<TickMetadata>(target, TICK, { interval, method });
  };
