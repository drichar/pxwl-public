import { lighten, darken } from 'polished';

const baseColors = {
  blue: '#007bff',
  green: '#48c289',
  yellow: '#ffae00',
  red: '#ed553b',
  midnight: '#11151a',
  silver: '#818e9b',
};

const scale = [5, 10, 15, 20];

const colorScale = buildColorScale(baseColors, scale);

const customColors = {
  white: '#fefefe',
  black: '#000000',
  'blue-active-input': '#265bad',
};

/**
 * Builds out color variables for theme
 *
 * @param {object} base primary palette color names and hex values
 * @param {array} scale values to scale each color lighter & darker
 * @return {object} color variables in key/value pairs
 */
function buildColorScale(base, scale) {
  let colorVars = {};
  let scaleLight;
  let scaleDark;

  Object.keys(base).forEach(key => {
    // set base color
    colorVars[`${key}Base`] = base[key];

    // lighter and darker versions of base
    scale.forEach(val => {
      scaleLight = lighten(val / 100, base[key]);
      scaleDark = darken(val / 100, base[key]);

      if (scaleLight !== '#fff') {
        colorVars[`${key}Lighten${val}`] = scaleLight;
      }

      if (scaleDark !== '#000') {
        colorVars[`${key}Darken${val}`] = scaleDark;
      }
    });
  });

  return colorVars;
}

const theme = Object.assign(colorScale, customColors);

export default theme;
