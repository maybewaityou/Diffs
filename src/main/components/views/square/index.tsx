/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ISquareProps } from './PropsType';
import styles from './style/index';

export default (props: Readonly<ISquareProps>) => (
  <TouchableOpacity activeOpacity={0.8} style={[styles.container, props.style]} onPress={props.onPress}>
    <Image source={props.source} style={[styles.image, props.imageStyle]}/>
    <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
  </TouchableOpacity>
);
