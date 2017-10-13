/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style/index';

export default (props: Readonly<any>) => (
  <TouchableOpacity activeOpacity={0.8} style={[styles.container, props.style]} onPress={props.onPress}>
    <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
  </TouchableOpacity>
);
