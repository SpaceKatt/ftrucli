export interface CityClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  runQuery(query: string): Promise<any>;
}
