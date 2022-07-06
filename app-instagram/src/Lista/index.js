import {useState} from "react";

import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default function Lista(props) {
  const [feed,setFeed] = useState(props.data)
  return (
    <View style={styles.areafeed}>
      <View style={styles.viewPerfil}>
        <Image
        source={{uri:feed.imgperfil}}
        style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{feed.nome}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{uri:feed.imgPublicacao}}
        style={styles.fotoPublicacao}
        />
        <View style={styles.areaIcones}>
          <TouchableOpacity>
            <Image
            source={require('../img/like.png')}
            style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
            source={require('../img/send.png')}
            style={styles.icone}
            />
          </TouchableOpacity>
        </View>
          <View style={styles.areaRodape}>
            <Text style={styles.nomeRodape}>
              {feed.nome}
            </Text>
            <Text style={styles.descRodape}>
              {feed.descricao}
            </Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  areafeed:{},
  nomeUsuario:{
    fontSize:17,
    textAlign:'left',
    color:'black'
  },
  fotoPerfil:{
    width:40,
    height:40,
    borderRadius:25
  },
  fotoPublicacao:{
    flex:1,
    height:400,
    alignItems:'center'
  },
  viewPerfil:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    padding:8
  },
  areaIcones:{
    flexDirection:'row',
    padding:5
  },
  icone:{
    width:27,
    height:27
  },
  btnSend:{
    paddingLeft:10
  },
  areaRodape:{
    flexDirection:'row',
    alignItems:'center'
  },
  descRodape:{
    paddingLeft: 5,
    fontSize:15,
    color:'black'
  },
  nomeRodape:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:5
  }
   
})