import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {addTodoStyles as styles} from './styles';

export const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type Something Todo..."
        placeholderTextColor="rgba(255,255,255,0.4)"
        onChangeText={changeHandler}
      />

      <TouchableOpacity style={styles.btn} onPress={() => submitHandler(text)}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
