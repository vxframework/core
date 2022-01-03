import 'reflect-metadata';
import {
  Command,
  CommandReader,
  Controller,
  Export,
  ExportReader,
  LocalEvent,
  LocalEventReader,
  Logger,
  NetEvent,
  NetEventReader,
  Vertex,
} from '../../src';

@Controller('testController')
class TestControler {
  @Command('kek')
  chat(): void {}

  @Export()
  private exp(): void {}

  @LocalEvent('evt')
  private evt(): void {}

  @NetEvent('evt2')
  private evt2(): void {}
}

const app = new Vertex({
  controllers: [TestControler],
  logger: new Logger('kek'),
  metadataReaders: [
    CommandReader,
    ExportReader,
    LocalEventReader,
    NetEventReader,
  ],
});

app.start();
