# Controller decorator

Example

```typescript
import { Controller } from "./controller.decorator";

@Controller('controllerName')
class T {}
```

It marks class T as controller and sets it's name metadata to "controllerName".
Controller name is used by metadata readers

Only controllers can use all the decorators from this and other vxf packages