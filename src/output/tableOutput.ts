import { Output } from '../interfaces';
import { jsonToTable } from '../utilities';

import { table } from 'table';
import { SodaResponseHeaders } from '../constants';

export class TableOutput implements Output {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static tableDataFilter(data: any[]): any[] {
    const relevantHeaders = [
      SodaResponseHeaders.applicant,
      SodaResponseHeaders.address,
      SodaResponseHeaders.fooditems,
      SodaResponseHeaders.dayshours,
      SodaResponseHeaders.status,
      SodaResponseHeaders.longitude,
      SodaResponseHeaders.latitude,
    ];
    const truncateLength = 30;
    return data.reduce((result, element) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newElement: any = {};
      let success = true;

      const elementKeys = Object.keys(element);
      for (const header of relevantHeaders) {
        if (elementKeys.indexOf(header) < 0) {
          success = false;
          break;
        }
        newElement[header] = String(element[header]).substring(
          0,
          truncateLength,
        );
      }

      if (success) {
        result.push(newElement);
      }

      return result;
    }, []);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  print(data: any): void {
    const filteredData = TableOutput.tableDataFilter(data);

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
