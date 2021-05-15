import { OutputType, Output } from '../interfaces';
import { JsonOutput, TableOutput } from '../output';

export class OutputFactory {
  static createOutput(kind: OutputType): Output {
    switch (kind) {
      case OutputType.prettyJson:
        return new JsonOutput();
      case OutputType.table:
        return new TableOutput();
      default:
        throw new TypeError(`Unknown type "${kind}" given to OutputFactory`);
    }
  }
}
