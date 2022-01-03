#Net event decorator

The examples bellow are the same

```typescript
class T {
  constructor() {
    onNet('netEvent', this.netEventHandler.bind(this))
  }

  private netEventHandler(...args: unknown[]): void {

  }
}
```

```typescript
import { Controller } from "./controller.decorator";
import { NetEvent } from "./net-event.decorator";

@Controller('T')
class T {
  @NetEvent('netEvent')
  private netEventHandler(...args: unknown[]): void {}
}
```