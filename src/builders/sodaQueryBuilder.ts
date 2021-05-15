import { QueryBuilder } from '../interfaces';

export class SodaQueryBuilder implements QueryBuilder {
  private _select: string[] = [];
  private _lat: string = '';
  private _long: string = '';
  private _limit: number = -1;
  private _distance: number = -1;

  select(field: string): QueryBuilder {
    throw new Error('Method not implemented.');
  }

  withDistance(distance: number): QueryBuilder {
    this._distance = distance;
    return this;
  }

  withLat(lat: string): QueryBuilder {
    this._lat = lat;
    return this;
  }

  withLong(long: string): QueryBuilder {
    this._long = long;
    return this;
  }

  withLimit(limit: number): QueryBuilder {
    this._limit = limit;
    return this;
  }

  buildQuery(): string {
    if (this._lat === '' || this._long === '') {
      throw new Error(
        'SodaQueryBuilder :: User must set both lat and long before bulding query...',
      );
    }
    return `select * where status=='APPROVED' and within_circle(location,${this._lat},${this._long},${this._distance}) limit ${this._limit}`;
  }
}
