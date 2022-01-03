import { IMetadataReader } from '../../interfaces';
import { Injectable } from '../decorators';
import { Reflector } from '../reflector';
import { CommandMetadata } from '../../types';
import { COMMAND } from '../../const';
import { Logger } from '../logger';

@Injectable()
export class CommandReader implements IMetadataReader {
  public static log = true;

  private logger = new Logger('Command');

  public read(target: unknown): void {
    const ctor = target.constructor;
    const controllerName = Reflector.getControllerName(ctor);
    const commands = Reflector.get<CommandMetadata[]>(target, COMMAND) || [];
    commands.forEach(({ command, isRestricted, method }) => {
      global.RegisterCommand?.(
        command,
        target[method].bind(target),
        isRestricted,
      );
      if (!CommandReader.log) {
        return;
      }
      this.logger.success(
        `Command [${command}] is bound to ${controllerName}.${method}`,
      );
    });
  }
}
