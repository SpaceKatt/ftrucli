import { CityClient } from '../interfaces';

import axios from 'axios';
import { FtrucliConstans } from '../constants/ftrucliConstants';

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

export class SfSodaClient implements CityClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async runQuery(query: string): Promise<any> {
    const encodedQuery = encode(query);
    const request = `${FtrucliConstans.apiEndpoint}?$query=${encodedQuery}`;

    let data;
    await axios.get(request).then((response) => {
      data = response.data;
    });
    return data;
  }
}
