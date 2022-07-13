import { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import api from './src/api';

export default function App() {
  const [cep, setCep] = useState('')
  const [dados, setDados] = useState('')
  const [loading, setLoading] = useState(false)

  
  async function buscaCep() {
    setLoading(true)
    const { data } = await api.get(`${cep}/json`).catch(() =>{
      setLoading(false)
      alert('Erro ao consultar o CEP')
    })
    
    
    setDados(data)
    setLoading(false)

  }
  function showResult() {
    if (loading) {
      return <ActivityIndicator size={50} color={'blue'}></ActivityIndicator>
    } else if (dados !== '') {
      return (
        <View>
          <Text style={styles.textResult}>CEP: {dados.cep}</Text>
          <Text style={styles.textResult}>Logradouro: {dados.logradouro}</Text>
          <Text style={styles.textResult}>Cidade: {dados.localidade}</Text>
          <Text style={styles.textResult}>Bairro: {dados.bairro}</Text>
          <Text style={styles.textResult}>UF: {dados.uf}</Text>
        </View>
      )
    }
  }

  function limpar() {
    setCep('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaCep}>
        <Text style={styles.textCep}>Digite o cep desejado</Text>
        <TextInput
          placeholder='Ex: 79003144'
          style={styles.inputCep}
          keyboardType='numeric'
          onChangeText={(text) => setCep(text)}
          value={cep} />
        <View style={styles.areaBotoes}>
          <TouchableOpacity style={styles.botao} onPress={buscaCep} >
            <View style={[styles.areaBotao, { backgroundColor: '#1c70c8' }]}>
              <Text style={styles.textoBotao}> Buscar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={limpar}>
            <View style={[styles.areaBotao, { backgroundColor: '#db481a' }]} >
              <Text style={styles.textoBotao}> Limpar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.areaResult}>
          {showResult()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center'
  },
  areaCep: {
    marginTop: 80,
    width: '100%'
  },
  textCep: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputCep: {
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 15
  },
  areaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  areaBotao: {
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  textoBotao: {
    color: 'white',
    fontWeight: '400'
  },
  areaResult: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50
  },
  textResult: {
    fontSize: 21,
    fontWeight: 'bold'
  }
});
