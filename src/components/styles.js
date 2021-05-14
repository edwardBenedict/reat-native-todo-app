import {StyleSheet, Dimensions} from 'react-native';

export const addTodoStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  btn: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff3d00',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const bodyStyles = StyleSheet.create({
  textStyle: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    color: '#ffff8d',
    textAlign: 'center',
    fontSize: 20,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'center',
  },
  numText: {
    fontSize: 40,
    color: '#d61016',
  },
  left: {
    flex: 3,
    marginLeft: 20,
  },
  right: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#ffda35',
  },
});
