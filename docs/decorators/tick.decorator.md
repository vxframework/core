#OnTick decorator

The examples bellow are the same

```typescript
class T {
  constructor() {
    setInterval(this.tick1.bind(this), 100)
    setTick(this.tick2.bind(this))
  }

  private tick1(...args: unknown[]): void {}

  private tick2(...args: unknown[]): void {}
}
```

```typescript
import { Controller } from "./controller.decorator";
import { OnTick } from "./tick.decorator";

@Controller('T')
class T {
  // interval is optional, default 0
  @OnTick(100)
  private tick1(...args: unknown[]): void {
  }

  @OnTick()
  private tick2(...args: unknown[]): void {
  }
}
```