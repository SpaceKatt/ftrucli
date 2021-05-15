import { Output } from '../interfaces';

export class RawOutput implements Output {
  print(data: any): void {
    console.log(data);
  }
}
