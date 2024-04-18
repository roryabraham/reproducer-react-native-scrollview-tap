import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694fdsa0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'ss-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694fdsfda0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694fdfda0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694ssssa0f-3da1-471f-bd96-145571e29d72',
    title: 'fds Item',
  },
];

const Item = ({title}) => (
  <Pressable style={styles.item} onPress={() => console.log('hello')}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        inverted
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
