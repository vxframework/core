# Tick
##Example

```typescript
import { Tick } from "./tick";

const tick = new Tick(() => {
  console.log('in vehicle')
});

on('enterVehicleEvent', () => tick.start());

on('leaveVehicleEvent', () => tick.stop());


// You can also pause a tick for some amount of time
// The example bellow waits for 1000ms and then starts again
tick.pause(1000)
```