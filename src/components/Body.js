import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {bodyStyles as styles} from './styles';

export const Body = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View>
        <Text style={styles.textStyle}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
