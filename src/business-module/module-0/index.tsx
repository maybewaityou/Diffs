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
import { HotUpdateModule } from '../../main/native-modules/index';
import LeftMenu from '../../pages/components/LeftMenu';
import SubViews from '../../pages/components/SubViews';

export interface IStyle {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  margin: ViewStyle;

}

const moduleName = 'Module_0';

class Module0 extends React.Component<any, any> {

  public componentDidMount() {
    HotUpdateModule.update(moduleName, 'http://192.168.1.117/api/checkForUpdates', {
      moduleVersionKey: 'module_0_version',
      firstUpdateKey: 'firstUpdateKey',
      jsBundleRemoteURL: 'http://192.168.1.117/module_0/bundle.zip',
    }, (response: any) => {

    }, (error: any) => {

    });
  }

  public render() {
    return (
      <View style={styles.container}>
        <LeftMenu />
        <View style={{ flex: 1 }}>
          <SubViews title="借记卡业务">
            <Square source={Images.cardOpenIcon} title="开卡" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.cardActiveIcon} title="激活" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.socialSecurityCardIcon} title="社保卡申领" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.socialSecurityCardChangeCardIcon} title="社保卡补卡/换卡" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.socialSecurityCardReportIcon} title="社保卡口头挂失" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
          </SubViews>
          <SubViews title="电子银行业务">
            <Square source={Images.contractApplyIcon} title="签约申请" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.contractChangeIcon} title="签约变更" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.e_shield} title="E盾发放" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.betterLifeIcon} title="美好生活版签约" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
          </SubViews>
          <SubViews title="业务办理">
            <Square source={Images.businessBoxIcon} title="业务办理箱" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.padOutsideIcon} title="出库" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
            <Square source={Images.padInsideIcon} title="入库" style={[styles.button, styles.margin]} titleStyle={styles.buttonText} onPress={() => {

            }} />
          </SubViews>
        </View>
      </View>
    );
  }
}

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

AppRegistry.registerComponent(moduleName, () => Module0);
