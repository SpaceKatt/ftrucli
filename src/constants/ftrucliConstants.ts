// intent, split constants into semantic groups
// everything in one class, for now, due to time constraints
export class FtrucliConstans {
  static readonly apiEndpoint: string =
    'https://data.sfgov.org/resource/rqzj-sfat.json';
}

export enum SodaResponseHeaders {
  applicant = 'applicant',
  address = 'address',
  latitude = 'latitude',
  longitude = 'longitude',
  dayshours = 'dayshours',
  locationdescription = 'locationdescription',
  fooditems = 'fooditems',
  status = 'status',
}
