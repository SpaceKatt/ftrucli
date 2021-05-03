export function* prefixGenerator(prefix: string): IterableIterator<string> {
  let i = 0;
  while (true) {
    yield `${prefix}_${i}`;
    i += 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonToTable(data: any[]): string[][] {
  if (!data) {
    throw new SyntaxError('No data to transform!');
  }
  const headers: string[] = [];
  const firstRow = data[0];

  for (const header of Object.keys(firstRow)) {
    headers.push(header);
  }

  const table: string[][] = [headers];

  for (const record of data) {
    for (const header of Object.keys(record)) {
      if (headers.indexOf(header) < 0) {
        throw new SyntaxError(
          `jsonToTable: Header "${header}" of child does not exist on prototype`,
        );
      }
    }
    const tableRow: string[] = [];
    for (const header of headers) {
      if (!record[header]) {
        throw new SyntaxError(
          `jsonToTable: Header "${header}" of prototype does not exist on child`,
        );
      }
      tableRow.push(record[header]);
    }
    table.push(tableRow);
  }

  return table;
}
