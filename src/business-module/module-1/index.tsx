/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import {
  AppRegistry,
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Square } from '../../main/components/index';
import { Images } from '../../main/constant/index';
import LeftMenu from '../../pages/components/LeftMenu';
import SubViews from '../../pages/components/SubViews';

export interface IStyle {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  margin: ViewStyle;

}

const Module_1 = () => (
  <View style={styles.container}>
    <LeftMenu />
    <View style={{ flex: 1 }}>
      <SubViews title="商户营销">
        <Square source={Images.shxxlrIcon} title="商户信息录入" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.tjx1Icon} title="退件箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.cgx1Icon} title="草稿箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.shcxIcon} title="核准箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
      </SubViews>
      <SubViews title="信用卡分期">
        <Square source={Images.fqsqIcon} title="信用卡分期申请" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.fqysIcon} title="信用卡分期预审" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.fqjdIcon} title="分期进度查询" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.bjx1Icon} title="补件箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.cgx2Icon} title="草稿箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
      </SubViews>
      <SubViews title="信用卡发卡">
        <Square source={Images.xyksqIcon} title="信用单卡申请" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.tbsqIcon} title="信用卡团办申请" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.fsksqIcon} title="附属卡申请" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.tbIcon} title="团办查询" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.bjx2Icon} title="补件箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
        <Square source={Images.cgx2Icon} title="草稿箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

        }} />
      </SubViews>
    </View>
  </View>
);

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  margin: {
    marginLeft: 30,
  },

});

AppRegistry.registerComponent('Module_1', () => Module_1);
