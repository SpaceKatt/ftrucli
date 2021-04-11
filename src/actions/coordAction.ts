import { CommandLineAction } from "@rushstack/ts-command-line";

export class CoordAction extends CommandLineAction {
  constructor() {
    super({
      actionName: "coord",
      summary:
        "Finds food trucks within a specified distance from a coordinate pair.",
      documentation: "TODO: more docs here.",
    });
  }

  protected async onExecute(): Promise<void> {}

  protected onDefineParameters(): void {}
}
