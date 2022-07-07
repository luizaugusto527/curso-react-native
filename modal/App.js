import { useState } from 'react';
import { StyleSheet, Text, View,Button, Modal} from 'react-native';

import Entrar from './src/Entrar'
export default function App() {
  const [visibleModal, isVisible] = useState(false)

  function showModal() {
    isVisible(true)
  }
  function hiddenModal() {
    isVisible(false)
  }
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:9}}>Clique aqui para abrir o modal!</Text>
      <Button title='Entrar' onPress={showModal}></Button>
      <Modal animationType='slide' visible={visibleModal}>
        <View style={styles.modal}>
        <Entrar fechar={()=> hiddenModal()}></Entrar>

        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    flex:1,
    justifyContent:'center',
    margin: 10
  }
});
