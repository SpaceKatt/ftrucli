import { SodaQueryBuilder } from '../builders';
import { SfSodaClient } from '../services';

import {
  CommandLineAction,
  CommandLineChoiceParameter,
  CommandLineIntegerParameter,
  CommandLineStringParameter,
} from '@rushstack/ts-command-line';
import { allOutputTypes, OutputType } from '../interfaces';
import { OutputFactory } from '../factories';

export class CoordAction extends CommandLineAction {
  private _distance!: CommandLineIntegerParameter;
  private _limit!: CommandLineIntegerParameter;
  private _lat!: CommandLineStringParameter;
  private _long!: CommandLineStringParameter;
  private _output!: CommandLineChoiceParameter;

  constructor() {
    super({
      actionName: 'coord',
      summary:
        'Finds food trucks within a specified distance from a coordinate pair.',
      documentation:
        'Finds food trucks within a specified distance from a coordinate pair. Filters exist for limiting the number of food trucks which are displayed.',
    });
  }

  protected async onExecute(): Promise<void> {
    const queryBuilder = new SodaQueryBuilder();

    const query = queryBuilder
      .withLat(this._lat.value!)
      .withLong(this._long.value!)
      .withLimit(this._limit.value!)
      .withDistance(this._distance.value!)
      .buildQuery();

    const cityClient = new SfSodaClient();
    const data = await cityClient.runQuery(query);

    const outputType = this._output.value!;
    const output = OutputFactory.createOutput(outputType as OutputType);

    output.print(data);
  }

  protected onDefineParameters(): void {
    this._long = this.defineStringParameter({
      argumentName: 'LONGITUDE',
      required: true,
      parameterLongName: '--long',
      description: "A user's longitude.",
    });
    this._lat = this.defineStringParameter({
      argumentName: 'LATITUDE',
      required: true,
      parameterLongName: '--lat',
      description: "A user's latitude.",
    });
    this._limit = this.defineIntegerParameter({
      argumentName: 'LIMIT',
      parameterLongName: '--limit',
      parameterShortName: '-n',
      description: 'Limits the number of responses returned from a SODA query.',
      defaultValue: 6,
    });
    this._distance = this.defineIntegerParameter({
      argumentName: 'DISTANCE',
      parameterLongName: '--distance',
      parameterShortName: '-d',
      description:
        'The distance (in meters) to search outwards from a coordinate point.',
      defaultValue: 5000,
    });
    this._output = this.defineChoiceParameter({
      parameterLongName: '--output',
      parameterShortName: '-o',
      description: 'Determines how the results are displayed.',
      alternatives: allOutputTypes,
      defaultValue: OutputType.prettyJson,
    });
  }
}
