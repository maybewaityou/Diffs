/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import * as React from 'react';
import {
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Constant } from '../../../main/constant/index';

export interface IStyle {
  container: ViewStyle;

}

export interface IViewProps {

}

export default class extends PureComponent<IViewProps, any> {

  public static navigationOptions = {
    title: Constant.favoriteTabHeaderTitle,
  };

  public render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }

}

const styles = StyleSheet.create<IStyle>({
  container: {

  },

});
