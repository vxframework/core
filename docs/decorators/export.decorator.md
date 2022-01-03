#Export decorator

The examples bellow are the same

```typescript
class T {
  constructor() {
    global.exports('exportName', this.export1.bind(this))
    global.exports('T_export2', this.export2.bind(this))
  }

  private export1(...args: unknown[]): void {}

  private export2(...args: unknown[]): void {}
}
```

```typescript
import { Export } from "./export.decorator";
import { Controller } from "./controller.decorator";

@Controller('T')
class T {
  // exportName is optional, controllerName_methodName by default
  @Export('exportName')
  private export1(...args: unknown[]): void {}

  @Export()
  private export2(...args: unknown[]): void {}
}
```