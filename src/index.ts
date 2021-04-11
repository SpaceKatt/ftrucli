#!/usr/bin/env node
import {
  CommandLineFlagParameter,
  CommandLineParser,
} from "@rushstack/ts-command-line";

import { CoordAction } from "./actions";

export class TrucliCommandLine extends CommandLineParser {
  private _verbose!: CommandLineFlagParameter;

  constructor() {
    super({
      toolFilename: "trucli",
      toolDescription:
        "Food Truck CLI used to find food trucks near a geospatial coordinate (especially in San Francisco).",
    });

    this.addAction(new CoordAction());
  }

  protected onDefineParameters(): void {
    this._verbose = this.defineFlagParameter({
      parameterLongName: "--verbose",
      parameterShortName: "-v",
      description: "Print out all the debug!",
    });
  }

  protected onExecture(): Promise<void> {
    return super.onExecute();
  }
}

const cmdLine: TrucliCommandLine = new TrucliCommandLine();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
cmdLine.execute();
