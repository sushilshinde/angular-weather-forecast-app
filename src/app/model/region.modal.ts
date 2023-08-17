// Model class of region
export class Region {
  public city: string;
  public region: string;
  public country: string;

  constructor(city: string, region: string, country: string) {
    this.city = city;
    this.region = region;
    this.country = country;
  }
}
