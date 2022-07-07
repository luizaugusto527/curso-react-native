import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard} from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [input, setInput] = useState('')
  
  function gravaNome() {
    setInput(name)
    Keyboard.dismiss()
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaInput}>
        <TextInput style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.btn} onPress={gravaNome}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
        <Text style={styles.textName}>{input}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 35
  },
  input: {
    width:320,
    borderWidth: 1,
    paddingLeft: 9
  },
  areaInput:{
    flexDirection:'row'
  },
  btn:{
    borderWidth:1,
    marginLeft: 5,
    width:25
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  btnText:{
    color: 'white'
  },
  textName:{
    fontSize: 21,
    textAlign:'center',
    marginTop: 15
  }
});
