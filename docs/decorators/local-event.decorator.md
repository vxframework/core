#Local event decorator

The examples bellow are the same

```typescript
class T {
  constructor() {
    on('event', this.eventHandler.bind(this))
  }

  private eventHandler(...args: unknown[]): void {}
}
```

```typescript
import { Controller } from "./controller.decorator";
import { LocalEvent } from "./local-event.decorator";

@Controller('T')
class T {
  @LocalEvent('event')
  private eventHandler(...args: unknown[]): void {}
}
```