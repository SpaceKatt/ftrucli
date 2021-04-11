import { Output } from '../interfaces';

export class JsonOutput implements Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void {
    const outuptMsg = JSON.stringify(data, null, 2);
    console.log(outuptMsg);
  }
}
