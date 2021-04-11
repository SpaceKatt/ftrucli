export interface QueryBuilder {
  select(field: string): QueryBuilder;
  withLat(lat: string): QueryBuilder;
  withLong(long: string): QueryBuilder;
  withLimit(limit: number): QueryBuilder;
  buildQuery(): string;
}
