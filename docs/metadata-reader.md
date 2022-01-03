# Metadata reader

Metadata reader is a singleton class that should be decorated as @Injectable() (@vxf/core) or @injectable() (inversify)

### Example

```typescript
import { IMetadataReader } from "./metadata-reader.interface";

// a metadata reader must implement IMetadataReader interface
export class MetadataReader implements IMetadataReader {
  // target is an instance of a controller, passed to Vertex constructor
  public read(target: unknown): void {
    // here you can read metadata from the controller
    // and apply some logic like subscribe to an event or so
  }
}
```