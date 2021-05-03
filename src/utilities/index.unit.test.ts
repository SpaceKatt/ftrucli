import { jsonToTable, prefixGenerator } from './index';

describe('jsonToTable', () => {
  beforeEach(() => {});
  it('Converts JSON objects into tables', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputJson: any[] = [];
    const expectedTable: string[][] = [];
    const headers: string[] = [];
    const data: string[][] = [];

    const headerGenerator: IterableIterator<string> = prefixGenerator('header');
    const dataGenerator: IterableIterator<string> = prefixGenerator('data');

    const numHeaders = 3;
    const numObjects = 3;

    for (let i = 0; i < numHeaders; i++) {
      headers.push(headerGenerator.next().value);
    }
    expectedTable.push(headers);

    for (let i = 0; i < numObjects; i++) {
      const objData: string[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const obj: any = {};
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        const genData = dataGenerator.next().value;
        obj[header] = genData;
        objData.push(genData);
      }
      data.push(objData);
      expectedTable.push(objData);
      inputJson.push(obj);
    }

    const result = jsonToTable(inputJson);
    expect(result).toStrictEqual(expectedTable);
  });

  it('Fills in missing data', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const missingData: any[] = [{ header_1: 'data' }, { header_2: 'data' }];
    const expectedTable = [
      ['header_1', 'header_2'],
      ['data', 'NULL'],
      ['NULL', 'data'],
    ];

    const table = jsonToTable(missingData);
    expect(table).toStrictEqual(expectedTable);
  });
});
