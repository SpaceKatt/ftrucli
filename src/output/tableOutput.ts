import { Output } from '../interfaces';

export class TableOutput implements Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void {
    throw new Error('Method not implemented.');
  }
}
