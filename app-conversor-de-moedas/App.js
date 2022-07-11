import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator,Keyboard } from 'react-native'

import Picker from './src/Picker'
import api from './src/Service/api'

export default function App() {
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)

  const [moedaSelecionada, setMoedaSelecionada] = useState(null)
  const [moedaValor, setMoedaValor] = useState(0)
  const [conversao, setConversao] = useState(0)

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('/all')
      const arryMoedas = []
      Object.keys(response.data).map((key) => {
        arryMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })
      setMoedas(arryMoedas)
      setLoading(false)
    }
    
    loadMoedas()
  }, [])
  
  function onChange(moeda) {
     setMoedaSelecionada(moeda)
     setConversao(0)
  }
  async function calcConversao() {
    const {data} = await api.get(`/all/${moedaSelecionada}-BRL`)
    const result = parseFloat(data[moedaSelecionada].ask) * parseFloat(moedaValor)
    setConversao(result.toFixed(2))
    Keyboard.dismiss()
    
  }


  if (loading == true) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex:1 }}>
        <ActivityIndicator color={'blue'} size={50} />
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione a sua moeda</Text>
          <Picker moedas={moedas} onChange={onChange} />
        </View>
        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
          <TextInput
            placeholder='EX:150'
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text)=>setMoedaValor(text)}
          />
        </View>
        <TouchableOpacity style={styles.btnArea} onPress={calcConversao}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>
        {conversao !== 0 && moedaValor!='' && <View style={styles.areaResulto}>
          <Text style={styles.valorConvertido}> {moedaValor} {moedaSelecionada}</Text>
          <Text style={[styles.valorConvertido, { fontSize: 18, margin: 10 }]}>Corresponde a </Text>
          <Text style={styles.valorConvertido}>R$ {conversao.toString().replace('.',',')}</Text>
        </View>}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 120
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1
  },
  titulo: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingVertical: 9
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 8,
    color: '#000'
  },
  btnArea: {
    width: '90%',
    backgroundColor: '#f84b57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  areaResulto: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  valorConvertido: {
    fontSize: 39,
    fontWeight: 'bold'
  }
})