export function* prefixGenerator(prefix: string): IterableIterator<string> {
  let i = 0;
  while (true) {
    yield `${prefix}_${i}`;
    i += 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonToTable(data: any[]): string[][] {
  if (!data || data.length <= 0) {
    throw new Error('No data to transform!');
  }
  const headers: string[] = [];

  // collect all headers in JSON objs
  for (let i = 0; i < data.length; i++) {
    for (const header of Object.keys(data[i])) {
      if (headers.indexOf(header) < 0) {
        headers.push(header);
      }
    }
  }

  const table: string[][] = [headers];

  // create a record for each object to insert into the table
  for (const record of data) {
    const tableRow: string[] = [];
    for (const header of headers) {
      if (!record[header]) {
        record[header] = 'NULL';
      }
      tableRow.push(record[header]);
    }
    table.push(tableRow);
  }

  return table;
}
