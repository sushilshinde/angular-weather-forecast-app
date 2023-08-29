import { WeatherApiService } from './weather-api.service';

fdescribe('WeatherApiService', () => {
  let weatherService: WeatherApiService;

  beforeEach(() => {
    weatherService = new WeatherApiService();
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it('should set active weather report with valid input', () => {
    weatherService.setActiveWeatherReport('sunny');
    expect(weatherService.getActiveWeatherReport()).toBe('sunny');
  });

  it('should not set active weather report with invalid input', () => {
    weatherService.setActiveWeatherReport(undefined);
    expect(weatherService.getActiveWeatherReport()).toBeUndefined();
  });

  it('should get active weather report after setting the active weather', () => {
    const expectedReport = 'cloudy';
    weatherService.setActiveWeatherReport(expectedReport);
    expect(weatherService.getActiveWeatherReport()).toBe(expectedReport);
  });

  it('should subscribe to activeWeatherReportChanged and receive updates', () => {
    const expectedReport = 'windy';
    let receivedReport = '';

    weatherService.activeWeatherReportChanged.subscribe((report) => {
      receivedReport = report;
    });

    weatherService.setActiveWeatherReport(expectedReport);
    expect(receivedReport).toBe(expectedReport);
  });

  it('should have default active weather report if not set', () => {
    const defaultReport = 'rain';
    expect(weatherService.getActiveWeatherReport()).toBe(defaultReport);
  });
});
