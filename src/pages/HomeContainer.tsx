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
import { Button } from '../main/components/index';
import { Color, Constant, Images, Style } from '../main/constant/index';
import { JumpToNativeModule } from '../main/native-modules/index';
import { FavoriteNavigatorContainer, HomeNavigatorContainer, MeNavigatorContainer, TrendingNavigatorContainer } from './NavigatorContainer';

export interface IStyle {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  margin: ViewStyle;

}

interface IProps {

}

interface IState {

}

export default (props: Readonly<IProps>) => (
  <View style={styles.container}>
    <Button title="module 0" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {
      JumpToNativeModule.toActivity('com.diffs.pages.Module_0', '');
    }} />
    <Button title="module 1" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {
      JumpToNativeModule.toActivity('com.diffs.pages.Module_1', '');
    }}/>
  </View>
);

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: Color.red,
    borderRadius: 10,
  },
  buttonText: {
    color: Color.white,
    fontSize: 25,
  },
  margin: {
    margin: 30,
  },

});
