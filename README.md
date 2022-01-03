# VXF/core package

It was created to make fivem scripting easier using typescript

## Download & Install
using npm
```shell
npm i @vxf/core
```
using yarn
```shell
yarn add @vxf/core
```
https://www.npmjs.com/package/@vxf/core

## Dependency injection
The package uses Inversify for dependency injection.
https://github.com/inversify/InversifyJS
Vertex makes any class that's decorated as @Controller() injectable, so you can use inversify package's decorators.
However, the package contains camel case aliases that you can use either.

## Simple Usage
```typescript
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
  private chat(): void {}

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
```

Notice that the logic behind these decorators is applied only to controllers

## More about decorators
### with decorators

```typescript
@Controller("Kek")
class TestController {
  
  @FromFile("resource", "file")
  private fromFileWithResource: unknown;
  
  @FromFile("file")
  private fromFile: unknown;
  
  @Command("kek", false)
  private chatKek(src: string, args: string[]): void {
    // logic goes here
  }

  @LocalEvent("kekLocal", false)
  private localEventKek(...args: unknown[]): void {
    // logic goes here
  }

  @NetEvent("kekLocal", false)
  private netEventKek(...args: unknown[]): void {
    // logic goes here
  }
  
  @Export()
  private exportKek(): void {
    // logic goes here
  }
}
```

### without decorators
```typescript

class TestController {

  private fromFileWithResource: unknown;
  private fromFile: unknown;

  constructor() {
    RegisterCommand("kek", this.chatKek.bind(this), false)
    on("kekLocal", this.localEventKek.bind(this))
    onNet("kekNet", this.netEventKek.bind(this))
    global.exports("controller_method", this.exportKek.bind(this))
    this.fromFileWithResource = LoadResourceFile("resource", "file")
    this.fromFile = LoadResourceFile(GetCurrentResourceName(), "file")
  }

  private chatKek(src: string, args: string[]): void {
    // logic goes here
  }

  private localEventKek(...args: unknown[]): void {
    // logic goes here
  }

  private netEventKek(...args: unknown[]): void {
    // logic goes here
  }
  
  private exportKek(): void {
    // logic goes here
  }
}
```


## Contributing
Feel free to contribute to this package

## License 
Well, the license is MIT. Its specified in package.json