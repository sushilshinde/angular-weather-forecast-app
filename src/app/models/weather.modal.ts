export class Weather {
  public region: String;
  public weatherCondition: String;
  public temperature: Number;
  public wind: Number;
  public precipitation: Number;
  public humidity: Number;

  constructor(
    region: String,
    weatherCondition: String,
    temperature: Number,
    wind: Number,
    precipitation: Number,
    humidity: Number
  ) {
    this.region = region;
    this.weatherCondition = weatherCondition;
    this.temperature = temperature;
    this.wind = wind;
    this.precipitation = precipitation;
    this.humidity = humidity;
  }
}
