<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
=======
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useFonts, } from '@expo-google-fonts/inter';

const styles = StyleSheet.create({

	Container:{
		flex: 1,
		backgroundColor: 'rgba(0,0,0,1)'
	}

})

const App=()=>{
	return (
		<View style={styles.Container} >
			<Text h1> Ola mundo </Text>
			<StatusBar barStyle='default' />
		</View>
	)
}

export default App;
>>>>>>> 70a41c6c761237cc224ef77ef18639102d0d0195
