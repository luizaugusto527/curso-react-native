import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default function ShowResults({precos, modal, recomendacao}) {
    return (
        <View style={styles.modalArea}>
        <View style={styles.gas}>
          <Image
            source={require('../assets/gas.png')}
          />
        </View>
        <Text style={styles.resultado}> Compensa usar {recomendacao}</Text>
        <View>
          <Text style={styles.precoTitle}>Com os preços: </Text>
          <Text style={styles.precos}>Álcool R$ {precos.alcool.toFixed(2)}</Text>
          <Text style={styles.precos}>Gasolina R$ {precos.gasolina.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.calcArea} onPress={modal}>
          <View style={styles.btnAreaCalc}>
            <Text style={styles.btnCalcTitle}>
              Calcular Novamente
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    modalArea: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center'
      },
      gas: {
        marginTop: 110
      },
      resultado: {
        color: '#30ef5a',
        fontSize: 29,
        fontWeight: 'bold',
        marginVertical: 35
      },
      precoTitle:{
        color:'white',
        fontSize: 28, 
        fontWeight:'bold'
      },
      precos:{
        color:'white',
        fontSize: 18,
        textAlign:'center',
        marginTop: 20
      },
      calcArea:{
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#ff4d3b',
        marginTop: 30,
        width: 210,
        height: 40
      },
      btnAreaCalc:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      btnCalcTitle:{
        color: '#ff4d3b',
        fontSize: 17,
        fontWeight:'bold'
      }
})