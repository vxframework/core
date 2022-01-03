import { CommandMetadata } from '../../../types';
import { COMMAND } from '../../../const';
import { Reflector } from '../../reflector';

export const Command =
  (command: string, isRestricted = false): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<CommandMetadata>(target, COMMAND, {
      method,
      isRestricted,
      command,
    });
  };
