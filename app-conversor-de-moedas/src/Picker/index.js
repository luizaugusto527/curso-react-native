import React from 'react'

import RNPickerSelect from 'react-native-picker-select'

export default function Picker(props) {
    const placeholder = {
        label: "Selecione uma moeda...",
        value:null,
        color:'#000'
    }
    return(
        <RNPickerSelect
        items={props.moedas}
        onValueChange={(valor)=>props.onChange(valor)}
        placeholder={placeholder}
        style={{
            inputIOS:{
                fontSize:20,
                color:'#000'
            },
            inputAndroid:{
                fontSize:20,
                color:'#000'
            }
        }}
           
        />
    )
}