import { decorate, injectable } from 'inversify';
import { Reflector } from '../../reflector';

export const Controller =
  (name: string): ClassDecorator =>
  (target): void => {
    decorate(injectable(), target);
    Reflector.setControllerName(target, name);
  };
