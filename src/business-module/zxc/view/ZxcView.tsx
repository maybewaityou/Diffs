/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import {
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export interface IStyle {
  container: ViewStyle;

}

export interface IViewProps {

}

export default (props: Readonly<IViewProps>) => (
  <View style={styles.container}>

  </View>
);

const styles = StyleSheet.create<IStyle>({
  container: {

  },

});
