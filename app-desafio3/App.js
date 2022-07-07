import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

import ShowResults from './Modal';

export default function App() {
  const [preco, setPreco] = useState({
    alcool: 0,
    gasolina: 0
  })
  const [ativModal, isAtivModal] = useState(false)
  const [recomendacao, setRecomendacao] = useState('')
  function mudarPrecoAlcool(text) {
    setPreco({
      ...preco,
      alcool: Number(text)
    })
  }
  function mudarPrecoGasolina(text) {
    setPreco({
      ...preco,
      gasolina: Number(text)
    })
  }
  function calcular() {
    let resultado = preco.alcool / preco.gasolina
    if (!resultado) {
      alert("Valor do Álcool ou gasolina inválido")
      return
    } else if (resultado < 0.7) {
      setRecomendacao('Álcool')
    } else {
      setRecomendacao('Gasolina')
    }
    isAtivModal(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('./assets/logo.png')}
        />
      </View>
      <Text style={styles.text}> Qual é a melhor opção ?</Text>
        <View>
          <Text style={styles.tituloInput}>Álcool (preço por litro):</Text>
          <TextInput  keyboardType='numeric' style={styles.input} onChangeText={(text) => mudarPrecoAlcool(text)} />
        </View>
        <View style={styles.gasolina}>
          <Text style={styles.tituloInput}>Gasolina (preço por litro):</Text>
          <TextInput keyboardType='numeric' style={styles.input} onChangeText={(text) => mudarPrecoGasolina(text)} />
        </View>
        <TouchableOpacity style={styles.btnArea} onPress={calcular}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Calcular</Text>
          </View>
        </TouchableOpacity>
      <Modal visible={ativModal} animationType='slide'>
        <ShowResults precos={preco} modal={() => isAtivModal(false)} recomendacao={recomendacao} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
  },
  logo: {
    alignItems: 'center',
    marginTop: 110
  },
  text: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 55
  },
  input: {
    backgroundColor: 'white',
    height: 45,
    marginHorizontal: 25,
    paddingLeft: 15,
    fontSize: 21,
    fontWeight: 'bold',
    borderRadius: 5
  },
  tituloInput: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 11
  },
  gasolina: {
    marginTop: 25
  },
  btnArea: {
    marginTop: 20,
    marginHorizontal: 25,
    backgroundColor: '#ef4130',
    height: 45,
    borderRadius: 10
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }


});
