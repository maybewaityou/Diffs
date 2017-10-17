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
import { Button, Square } from '../main/components/index';
import { Color, Constant, Images, Style } from '../main/constant/index';
import { JumpToNativeModule } from '../main/native-modules/index';
import SubViews from './components/SubViews';
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
    <SubViews title="业务应用" >
      <Square source={Images.icon} title="移动营销服务平台" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {
        JumpToNativeModule.toActivity('com.diffs.pages.Module_0', '');
      }} />
      <Square source={Images.icon} title="信用卡" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {
        JumpToNativeModule.toActivity('com.diffs.pages.Module_1', '');
      }}/>
    </SubViews>
  </View>
);

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
  },
  margin: {
    marginLeft: 30,
  },

});
