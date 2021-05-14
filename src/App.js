import React, {useState} from 'react';
import {FlatList, StatusBar, Alert, ScrollView, View, Text} from 'react-native';
import {AddTodo, Header, Body} from './components';
import {mainStyles as styles} from './mainStyles';

const App = () => {
  const [todos, setTodos] = useState([{text: 'Add Todo', key: '1'}]);

  const renderData = ({item}) => (
    <Body item={item} pressHandler={pressHandler} />
  );

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('Oops! Something went wrong.', 'It can not be empty!'),
        [{text: 'Understood', onPress: () => console.log('Alert Closed')}];
    }
  };

  return (
    <View style={styles.container}>
      <Header len={todos.length} />
      <AddTodo submitHandler={submitHandler} />
      <ScrollView nestedScrollEnabled>
        <StatusBar translucent barStyle="dark-content" />
        <FlatList
          data={todos}
          renderItem={renderData}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Nothing to do!</Text>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default App;
