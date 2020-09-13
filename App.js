import React, {useState} from 'react';

import {Text, View, StyleSheet,FlatList } from 'react-native';

import Header from './components/header';

import ListItem from './components/ListItem'

const App = () =>{

  const [items, setItems] = useState([
      {id: 123, text: 'Milk'},
      {id: 345, text: 'Eggs'},
      {id: 456, text: 'Bread'},
      {id: 574, text: 'Juice'},
    ]);
  
  const deleteItem = (id) =>{
  	setItems( prevItems => {
  		 return prevItems.filter(item => item.id != id);
  	});
  }

  return(
    <View style={styles.container} >
      <Header/>
      <FlatList
        data={items}
        renderItem= {({item}) => <ListItem item={item} deleteItem ={deleteItem} />}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    paddingTop:60,  
  },
  text: {
    color:'darkslateblue',
    fontSize:30
  }

});


export default App; 
