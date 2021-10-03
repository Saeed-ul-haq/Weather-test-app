export const toCelcius = (temperature) => {
  if (temperature) {
    return Math.floor(temperature - 273.5);
  }

  return undefined;
};
