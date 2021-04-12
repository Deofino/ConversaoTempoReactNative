import React from "react";
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text, ThemeProvider, Input, Button } from 'react-native-elements';
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
  
  const [fonts] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_300Light
  });
  if(!fonts){
    return (<ActivityIndicator />);
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.Container}>

        <Text h3>Conversão de tempo</Text>
        <Input label='Valor em segundos' 
          rightIcon={<Icon name='clock-o' size={25} color='#0D1113' />} 
          keyboardType='number-pad'
        />
        
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
  }
})
