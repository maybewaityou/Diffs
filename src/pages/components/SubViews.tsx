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
  <View style={[{ marginTop: 30, marginLeft: 20, marginRight: 20 }, props.style]}>
    <Text style={{ fontSize: 20 }}>{props.title}</Text>
    <View style={{ flexDirection: 'row', height: 150, marginTop: 20, backgroundColor: '#FAFAFA', borderWidth: 1, borderColor: Color.gray, borderRadius: 10 }}>
      {props.children}
    </View>
  </View>
);
