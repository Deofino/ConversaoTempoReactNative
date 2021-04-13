import React, {useState,useEffect} from "react";
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text, ThemeProvider, Input, } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { useFonts,Poppins_400Regular,Poppins_600SemiBold,Poppins_300Light } from "@expo-google-fonts/poppins";

const theme = {
  Text:{
    h3Style:{fontFamily:'Poppins_300Light',fontWeight: 'normal'},
    style:{
      color: '#e5e5e5',
      fontFamily: 'Poppins_300Light',
      marginVertical: 20,
    }
  },
  Input:{
    style:{
      fontFamily: 'Poppins_400Regular',
    },
    labelStyle:{
      color: 'white',
      fontFamily: 'Poppins_400Regular',
      fontWeight:'normal'
    },
    inputContainerStyle:{
      backgroundColor: '#D2D8E3',
      borderTopStartRadius: 6,
      borderTopEndRadius: 6,
      paddingHorizontal: 10,
      color: 'black',
    }
  }
  
}

const App = () => {
  const regex = /[0-9]/gi;

  const [segundos,setSegundos] = useState(null);

  const [Resto,setResto] = useState(0);
  const [Horas,setHoras] = useState(0);
  const [Minutos,setMinutos] = useState(0);
  const [Error,setError] = useState('');

  useEffect(()=>{
    setHoras(parseInt(segundos/3600));
    setMinutos(parseInt(segundos%3600/60));
    setResto(parseInt(segundos%3600%60));
  },[segundos])

  const [fonts] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_300Light
  });
  if(!fonts){
    return (<ActivityIndicator  />);
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.Container}>

        <Text h3>Conversão de tempo</Text>
        <Input label='Valor em segundos' 
        style={{
          alignItems: "baseline",
        }}
          rightIcon={<Icon name='clock-o' size={25} color='#0D1113' />} 
          keyboardType='number-pad'
          value={segundos}
          errorStyle={styles.medium}
          placeholder='60s = 1m | 60m = 1h'
          errorMessage={Error}
          onChangeText={(text)=>{
            if(text.length>0){
              if(!regex.test(text.charAt(text.length-1))){
                setError('Esse campo aceita somente numeros');
              }else {setSegundos(text);setError('')};
            }else {setSegundos('');setError('')};
          }}
        />
        {segundos!=null&&segundos!='' && <Text style={{fontSize: 16}}>Horas <Text style={styles.bold}>{Horas}</Text> | Minutos  <Text style={styles.bold}>{Minutos}</Text> | Segundos <Text style={styles.bold}>{Resto}</Text></Text>}
        <StatusBar style='auto' animated />
      </View>
    </ThemeProvider>
  )
}

export default App;

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1113',
  },
  bold:{
    fontFamily: 'Poppins_600SemiBold',
  },
  medium:{
    fontFamily: 'Poppins_400Regular',
  }
})
