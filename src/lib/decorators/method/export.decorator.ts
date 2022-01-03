import { ExportMetadata } from '../../../types';
import { EXPORT } from '../../../const';
import { Reflector } from '../../reflector';

export const Export =
  (name?: string): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<ExportMetadata>(target, EXPORT, { method, name });
  };
