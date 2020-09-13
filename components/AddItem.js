import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity    } from 'react-native';

import { AntDesign } from '@expo/vector-icons';




const AddItem = ({title}) =>{
  return(
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} /> 

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}> <AntDesign name="plus" size={24} color="black" />
         Add Item </Text>

      </TouchableOpacity>

    </View>
  );
};



const styles = StyleSheet.create({

});


export default AddItem; 
