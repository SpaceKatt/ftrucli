import { SodaQueryBuilder } from './sodaQueryBuilder';

describe('SodaQueryBuilder', () => {
  it('Builds queries', () => {
    const expectedQuery =
      'select distict objectid where within_circle(location,37.80,-122.43,1000) limit 7';
    const lat = '37.80';
    const long = '-122.43';
    const distance = 1000;
    const limit = 7;
    const queryBuilder = new SodaQueryBuilder();

    const query = queryBuilder
      .withLat(lat)
      .withLong(long)
      .withLimit(limit)
      .withDistance(distance)
      .buildQuery();

    expect(query).toEqual(expectedQuery);
  });
});
