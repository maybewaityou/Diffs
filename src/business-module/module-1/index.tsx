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
  Text,
  View,
} from 'react-native';

const Module_1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
    <Text style={{ color: 'white', fontSize: 25 }}>Module_1</Text>
  </View>
);

AppRegistry.registerComponent('Module_1', () => Module_1);
