import * as React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import todoPng from '../assets/todo.png';
import {headerStyles as styles} from './styles';

export const Header = ({len}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.logo} source={todoPng} />
      </View>
      <View style={styles.right}>
        <Text style={styles.numText}>{len}</Text>
      </View>
    </View>
  );
};
