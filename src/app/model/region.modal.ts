// Model class of region
export class Region {
  public city: String;
  public region: String;
  public country: String;

  constructor(city: String, region: String, country: String) {
    this.city = city;
    this.region = region;
    this.country = country;
  }
}
