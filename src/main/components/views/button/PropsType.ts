import { TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps {
  title: string;
  style: ViewStyle;
  titleStyle: TextStyle;
  onPress: (x?: any) => void;
}

export interface IButtonState {

}
