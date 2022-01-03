declare function GetCurrentResourceName(): string;
declare function LoadResourceFile(resource: string, filePath: string): string;

const cache: Record<string, unknown> = {};

export function FromFile(resource: string, file: string): PropertyDecorator;
export function FromFile(file: string): PropertyDecorator;
export function FromFile(resource: string, file?: string): PropertyDecorator {
  return (target, propertyKey): void => {
    const r = file ? resource : GetCurrentResourceName();
    const f = file ? file : resource;

    const cacheKey = `${r}/${f}`;

    if (!cache[cacheKey]) {
      const data = JSON.parse(LoadResourceFile(r, f));
      if (!data) {
        throw new Error(`Failed to load resource file ${cacheKey}`);
      }
      cache[cacheKey] = data;
    }

    target[propertyKey] = cache[cacheKey];
  };
}
