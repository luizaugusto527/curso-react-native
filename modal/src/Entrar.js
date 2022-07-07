import { useState } from 'react';
import { StyleSheet, Text, View,Button, Modal} from 'react-native';

export default function App(props) {
 
  return (
        <View  style={styles.modal}>
        <Text style={styles.modalText}> Seja Bem vindo!</Text>
        <Button title='Fechar' onPress={props.fechar}></Button>
        </View>
  )
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor:'#292929',
    height:350,
    borderRadius:25
  },
  modalText:{
    color:'#fff',
    fontSize:28
  }
});
