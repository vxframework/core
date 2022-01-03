#Command decorator

The examples bellow are the same

```typescript
class T {
  constructor() {
    RegisterCommand('chatCommand1', this.chatCommandHandler1.bind(this), false)
    RegisterCommand('chatCommand2', this.chatCommandHandler2.bind(this), true)
  }

  private chatCommandHandler1(...args: unknown[]): void {}
  private chatCommandHandler2(...args: unknown[]): void {}
}
```

```typescript
import { Command } from "./command.decorator";
import { Controller } from "./controller.decorator";

@Controller('T')
class T {
  @Command('chatCommand1', false)
  private chatCommandHandler1(...args: unknown[]): void {
  }

  // 2nd param is optional, false by default
  @Command('chatCommand2', true)
  private chatCommandHandler2(...args: unknown[]): void {
  }
}
```