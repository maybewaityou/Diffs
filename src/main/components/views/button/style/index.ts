/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IButtonStyle {
  container: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<IButtonStyle>({
  container: {
    height: 44,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});
