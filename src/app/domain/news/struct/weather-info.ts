class Weather {
  main: string;
  description: string;
  icon: string;
}
class TempMain {
  temp: number;
  feels_like: number;
}
class Wind {
  speed: number;
}
export class WeatherInfo {
  name: string;
  lang: string;
  weather: Weather[];
  tempMain: TempMain;
  wind: Wind;
}
