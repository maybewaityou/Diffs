/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: (x?: any) => void;
}

export interface IButtonState {

}
