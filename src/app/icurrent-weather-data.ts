export interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: Number
  },
  dt: number,
  sys: {
    country: string
  },
  name: string
}
