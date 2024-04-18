import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

const DATA = [
  {
    id: '7f396141-b463-43e1-9ecb-09a9a879cb97',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: 'b0bcd0cd-ac34-4d83-822e-25e309de2dab',
    title: 'Third Item',
  },
  {
    id: 'f56e8672-0df6-4bf1-a1e8-577828c6f285',
    title: 'Third Item',
  },
  {
    id: 'c746986a-a694-4c9d-b5ad-77f2ec7b6338',
    title: 'Third Item',
  },
  {
    id: 'ss-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'd58803c8-317d-463a-92dd-1a454cad9302',
    title: 'Third Item',
  },
  {
    id: 'f6aa49fb-4512-4040-a5f7-e5453c4c49c5',
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
