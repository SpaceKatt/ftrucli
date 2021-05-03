import { Output } from '../interfaces';
import { jsonToTable } from '../utilities';

import { table } from 'table';
import { SodaResponseHeaders } from '../constants';

export class TableOutput implements Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private tableDataFilter(data: any[]): any[] {
    const relevantHeaders = [
      SodaResponseHeaders.applicant,
      SodaResponseHeaders.address,
      SodaResponseHeaders.fooditems,
      SodaResponseHeaders.longitude,
      SodaResponseHeaders.latitude,
      SodaResponseHeaders.schedule,
    ];
    // cut strings to length of...
    const truncateLength = 30;

    // filter out irrelevant headers, and fill in missing values with "NULL"
    return data.reduce((result, element) => {
      // for each element, build a new element with only the relevant headers
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newElement: any = {};
      for (const header of relevantHeaders) {
        // don't truncate the schedule URL
        if (header === SodaResponseHeaders.schedule) {
          newElement[header] = String(element[header]);
        } else {
          // truncate every other field to constant length
          newElement[header] = String(element[header]).substring(
            0,
            truncateLength,
          );
        }
      }

      result.push(newElement);

      return result;
    }, []);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void {
    const filteredData = this.tableDataFilter(data);

    if (filteredData.length < 1) {
      console.log(
        'No search results to display! Food Trucks with missing hours are filtered out from results.',
      );
      console.log('  Try using a larger --distance or new --lat --long');
    } else {
      const tableTrucks = jsonToTable(filteredData);

      const output = table(tableTrucks);
      console.log(output);
    }
  }
}
