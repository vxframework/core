# Utils

delay example

```typescript
import { delay } from "./delay";

const fn = async (): Promise<void> => {
  console.log('hello');
  await delay(1000);
  // Wait for >= 1000ms (1 sec)
  console.log('hello 2')
} 

```