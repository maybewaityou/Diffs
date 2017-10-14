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
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Color, Constant, Images, Style } from '../main/constant/index';
import { FavoriteNavigatorContainer, HomeNavigatorContainer, MeNavigatorContainer, TrendingNavigatorContainer } from './NavigatorContainer';

export interface IStyle {
  container: ViewStyle;
  button: ViewStyle;

}

interface IProps {

}

interface IState {

}

export default class extends PureComponent<IProps, IState> {

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          console.log('--------');
        }} style={[styles.button]}><Text>module 1</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log('=========');
        }} style={[styles.button]}><Text>module 2</Text></TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create<IStyle>({
  container: {

  },
  button: {
    height: 44,
    backgroundColor: Color.blue,
  },

});
