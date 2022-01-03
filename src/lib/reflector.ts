export class Reflector {
  private static keys = {
    controllerName: 'CONTROlLER_NAME',
  };

  public static setControllerName(controller: unknown, name: string): void {
    Reflect.defineMetadata(Reflector.keys.controllerName, name, controller);
  }

  public static getControllerName(controller: unknown): string {
    if (typeof controller === 'function') {
      return Reflect.getMetadata(Reflector.keys.controllerName, controller);
    }
    return Reflect.getMetadata(
      Reflector.keys.controllerName,
      controller.constructor,
    );
  }

  public static extend<T>(
    target: unknown,
    key: string,
    data: T,
    method?: string,
  ): void {
    const prev = Reflector.get<T[]>(target, key, method) || [];
    prev.push(data);
    Reflect.defineMetadata(key, prev, target, method);
  }

  public static get<T>(target: unknown, key: string, method?: string): T {
    return Reflect.getMetadata(key, target, method);
  }
}
