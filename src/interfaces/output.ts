export enum OutputType {
  prettyJson = 'prettyJson',
}

export interface Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void;
}
