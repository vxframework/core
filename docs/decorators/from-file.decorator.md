#From file decorator

The examples bellow are the same

```typescript
class T {
  private file1: unknown;
  private file2: unknown;
}

T.prototype.file1 = JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'file'))
T.prototype.file2 = JSON.parse(LoadResourceFile('resource', 'file'))
```

```typescript
import { Controller } from "./controller.decorator";
import { FromFile } from "./from-file.decorator";

@Controller('T')
class T {
  @FromFile('file')
  private file1: unknown;
  
  // resource is optional, GetCurrentResourceName() by default
  @FromFile('resource', 'file')
  private file2: unknown;
}

```