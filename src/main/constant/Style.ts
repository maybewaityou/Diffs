/**
 *
 */
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Color } from './Color';

export interface ITabFooterStyle {
  tabImage: ImageStyle;
  selectedTabImage: ImageStyle;
  selectedTabTitle: TextStyle;

}

const tabFooterStyle = StyleSheet.create<ITabFooterStyle>({
  tabImage: {
    height: 32,
    width: 32,
  },
  selectedTabImage: {
    tintColor: Color.red,
  },
  selectedTabTitle: {
    color: Color.red,
  },

});

export const Style = {
  tabFooter: tabFooterStyle,

};
