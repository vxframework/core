export const CURRENT_RESOURCE: string =
  global.GetCurrentResourceName?.() || 'resource';

export const IS_SERVER: boolean = global.IsDuplicityVersion?.() ?? true;
