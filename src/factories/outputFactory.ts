import { OutputType, Output } from '../interfaces';
import { JsonOutput } from '../output';

export class OutputFactory {
  static createOutput(kind: OutputType): Output {
    switch (kind) {
      case OutputType.prettyJson:
        return new JsonOutput();
      default:
        throw new TypeError(`Unknown type "${kind}" given to OutputFactory`);
    }
  }
}
