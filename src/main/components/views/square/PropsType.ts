/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps {
  title: string;
  style: ViewStyle;
  titleStyle: TextStyle;
  onPress: (x?: any) => void;
}

export interface IButtonState {

}
