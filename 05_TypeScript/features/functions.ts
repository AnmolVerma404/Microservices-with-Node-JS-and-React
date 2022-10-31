const add = (a: number, b: number): number => {
  return a + b;
};
function divide(a: number, b: number): number {
  return a / b;
}
const mul = function (a: number, b: number): number {
  return a * b;
};
const logger = (message: string): void => {
  console.log(message);
};
const thowError = (message: string): never => {
  throw new Error(message);
};
const tdyWeather = {
  date: new Date(),
  weather: "sunny",
};
// const logWeather = (forecast: { date: Date; weather: string }):void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };//OR
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(tdyWeather);
