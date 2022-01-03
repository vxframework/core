import { IMetadataReader } from '../../interfaces';
import { Injectable } from '../decorators';
import { Logger } from '../logger';
import { Reflector } from '../reflector';
import { ExportMetadata } from '../../types';
import { EXPORT } from '../../const';

@Injectable()
export class ExportReader implements IMetadataReader {
  public static log = true;

  private logger = new Logger('Export');

  private maskExport(name: string, method: string): string {
    return `${name}_${method}`;
  }

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const exports = Reflector.get<ExportMetadata[]>(target, EXPORT) || [];
    exports.forEach(({ method }) => {
      const name = this.maskExport(controllerName, method);
      global.exports?.(name, target[method].bind(target));
      if (!ExportReader.log) {
        return null;
      }
      this.logger.success(
        `Export [${name}] is bound to ${controllerName}.${method}`,
      );
    });
  }
}
