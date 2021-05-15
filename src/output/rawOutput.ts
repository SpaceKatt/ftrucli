import { Output } from '../interfaces';

export class RawOutput implements Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void {
    console.log(data);
  }
}
