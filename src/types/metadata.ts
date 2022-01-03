export type EventMetadata = {
  method: string;
  event: string;
};

export type ExportMetadata = {
  method: string;
  name?: string;
};

export type CommandMetadata = {
  method: string;
  command: string;
  isRestricted: boolean;
};

export type TickMetadata = {
  method: string;
  interval?: number;
};
