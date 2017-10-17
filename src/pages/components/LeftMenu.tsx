/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
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
import { Color, Constant, Images, Style } from '../../main/constant/index';

export default (props: Readonly<any>) => (
  <View style={{ flexDirection: 'row', marginRight: 20 }}>
    <View style={{ alignItems: 'center', width: 230, backgroundColor: '#FAFAFA' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 230, width: 230, backgroundColor: '#0B4D8D' }}>
        <View style={{ flexDirection: 'row', marginTop: 30, marginRight: 30, alignItems: 'center' }}>
          <Image source={Images.defaultHeadProfileLogin} style={{ width: 65, height: 65 }}/>
          <Text style={{ fontSize: 18, color: Color.white, marginLeft: 10 }}>测试660042</Text>
        </View>
        <Text style={{ alignSelf: 'flex-start', fontSize: 16, color: Color.white, marginTop: 30, marginLeft: 20 }}>柜员号: 660042</Text>
        <Text style={{ alignSelf: 'flex-start', fontSize: 16, color: Color.white, marginTop: 5, marginLeft: 20 }}>网点号: CN0019009</Text>
        <Text style={{ alignSelf: 'flex-start', fontSize: 16, color: Color.white, marginTop: 5, marginLeft: 20 }}>设备编号: 20160012</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', width: 230 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
          <Image source={Images.homeIcon} style={{ width: 33, height: 33 }}/>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>首页</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 30 }}>
          <Image source={Images.productIcon} style={{ width: 33, height: 33 }}/>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>产品</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 30 }}>
          <Image source={Images.businessHandleIconActive} style={{ width: 33, height: 33 }}/>
          <Text style={{ fontSize: 18, color: '#1177DB', fontWeight: 'bold', marginLeft: 20 }}>业务办理</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 30 }}>
          <Image source={Images.commonToolsIcon} style={{ width: 33, height: 33 }}/>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>常用工具</Text>
        </View>
      </View>
      <Image source={Images.logoVerticalIcon} style={{ width: 150, height: 150, marginBottom: 30 }}/>
    </View>
    <View style={{ width: 1, backgroundColor: Color.gray }}>
    </View>
  </View>
);
