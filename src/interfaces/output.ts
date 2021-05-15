export enum OutputType {
  prettyJson = 'prettyJson',
  table = 'table',
}

export const allOutputTypes: string[] = Object.keys(OutputType);

export interface Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void;
}
