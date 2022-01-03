import { IConstructor } from '../types';
import { ILogger, IMetadataReader } from '../interfaces';
import { Reflector } from '../lib';
import { AppContainer } from '../const';

type Params = {
  controllers?: IConstructor[];
  metadataReaders?: IConstructor<IMetadataReader>[];
  logger?: ILogger;
};

export class Vertex {
  constructor(params: Params = {}) {
    params.controllers = params.controllers || [];
    params.controllers.forEach(el => {
      if (!Reflector.getControllerName(el)) {
        throw new Error(
          `Class ${el} is not decorated with @Controller() decorator`,
        );
      }
    });
    params.metadataReaders = params.metadataReaders || [];
    this.controllers = [...new Set(params.controllers)];
    this.metadataReaders = [...new Set(params.metadataReaders)].map(el =>
      AppContainer.get(el),
    );
    this.logger = params.logger;
  }

  private controllers: IConstructor[];
  private metadataReaders: IMetadataReader[];
  private logger: ILogger;

  private initializeControllers(): void {
    this.controllers.forEach(ctor => {
      const controller = AppContainer.get(ctor);
      this.metadataReaders.forEach(reader => {
        reader.read(controller);
      });
      this.logger?.success(
        `Initialized controller ${Reflector.getControllerName(ctor)}`,
      );
    });
  }

  public start(): void {
    this.initializeControllers();
  }
}
