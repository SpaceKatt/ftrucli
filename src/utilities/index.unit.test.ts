import { jsonToTable, prefixGenerator } from './index';

describe('jsonToTable', () => {
  beforeEach(() => {});
  it('Converts JSON objects into tables', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputJson: any[] = [];
    const expectedTable: string[][] = [];
    const headers: string[] = [];

    const headerGenerator: IterableIterator<string> = prefixGenerator('header');
    const dataGenerator: IterableIterator<string> = prefixGenerator('data');

    const numHeaders = 3;
    const numObjects = 3;

    // generate headers to construct table and JSON with
    for (let i = 0; i < numHeaders; i++) {
      headers.push(headerGenerator.next().value);
    }
    expectedTable.push(headers);

    // use headers to generate objects in their JSON and table representations
    for (let i = 0; i < numObjects; i++) {
      // create an object with data for each header
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const obj: any = {};
      //  create a row for the object in the expected table
      const objData: string[] = [];
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        // generate unique data for each header in each object
        const genData = dataGenerator.next().value;
        obj[header] = genData;
        objData.push(genData);
      }
      inputJson.push(obj);
      expectedTable.push(objData);
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

  it('Throws on empty dataset', () => {
    expect(() => {
      jsonToTable([]);
    }).toThrow();
  });
});
