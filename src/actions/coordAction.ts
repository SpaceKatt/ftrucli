import { JsonOutput } from '../output';

import { CommandLineAction } from '@rushstack/ts-command-line';

export class CoordAction extends CommandLineAction {
  constructor() {
    super({
      actionName: 'coord',
      summary:
        'Finds food trucks within a specified distance from a coordinate pair.',
      documentation: 'TODO: more docs here.',
    });
  }

  protected async onExecute(): Promise<void> {
    const data = { msg: 'reeee' };

    const output = new JsonOutput();

    output.print(data);
  }

  protected onDefineParameters(): void {}
}
