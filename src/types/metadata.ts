export type EventMetadata = {
  method: string;
  event: string;
};

export type ExportMetadata = {
  method: string;
};

export type CommandMetadata = {
  method: string;
  command: string;
  isRestricted: boolean;
};
