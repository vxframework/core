export const CURRENT_RESOURCE: string =
  global.GetCurrentResourceName?.() || 'resource';

export const IS_SERVER: string = global.IsDuplicityVersion?.() || true;
