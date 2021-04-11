import { Output } from '../interfaces';

export class JsonOutput implements Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void {
    const outuptMsg = JSON.stringify(2, null, data);
    console.log(outuptMsg);
  }
}
