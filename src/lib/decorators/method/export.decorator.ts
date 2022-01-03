import { ExportMetadata } from '../../../types';
import { EXPORT } from '../../../const';
import { Reflector } from '../../reflector';

export const Export =
  (): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<ExportMetadata>(target, EXPORT, { method });
  };
