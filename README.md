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
## Docs
### Decorators
1. [chat command](./docs/decorators/command.decorator.md) 
2. [export](./docs/decorators/export.decorator.md) 
3. [local event](./docs/decorators/local-event.decorator.md) 
4. [net event](./docs/decorators/net-event.decorator.md) 
5. [tick](./docs/decorators/tick.decorator.md) 
6. [load resource file](./docs/decorators/from-file.decorator.md)
7. [controller](./docs/decorators/controller.decorator.md)

## Dependency injection
The package uses Inversify for dependency injection.
https://github.com/inversify/InversifyJS
Vertex makes any class that's decorated as @Controller() injectable, so you can use inversify package's decorators.
However, the package contains Pascal case aliases that you can use either.



## Contributing
Feel free to contribute to this package

## License 
Well, the license is MIT. Its specified in package.json