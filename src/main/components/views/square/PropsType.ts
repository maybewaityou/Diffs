/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ImageRequireSource, ImageStyle, ImageURISource, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ISquareProps {
  source?: ImageURISource | ImageURISource[] | ImageRequireSource;
  title?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: (x?: any) => void;
}

export interface ISquareProps {

}
