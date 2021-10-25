// https://github.com/react-native-training/react-native-elements/blob/master/src/helpers/normalizeText.js

import {PixelRatio, Dimensions} from 'react-native';

const pixelRatio = PixelRatio.get();
const deviceWidth = Dimensions.get('window').width;

const normalize = size => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }
  }

  return size;
};

export default normalize;

export const DEFAULT_FONT_SIZE = 17;
