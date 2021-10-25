import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const PADDING = 16;
export const windowWidthPadding = windowWidth - 2 * PADDING;
