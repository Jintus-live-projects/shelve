import * as tinycolor from 'tinycolor2';

export const getPastelColor = (): string => {
  const color = tinycolor.random().saturate();

  return tinycolor.mix(color, tinycolor('white')).toHex();
};
