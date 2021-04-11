export interface QueryBuilder {
  select(field: string): QueryBuilder;
  withDistance(distance: number): QueryBuilder;
  withLat(lat: string): QueryBuilder;
  withLong(long: string): QueryBuilder;
  withLimit(limit: number): QueryBuilder;
  buildQuery(): string;
}
