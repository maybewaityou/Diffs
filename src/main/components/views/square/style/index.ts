
/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface ISquareStyle {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

export default StyleSheet.create<ISquareStyle>({
  container: {
    minWidth: 100,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});
