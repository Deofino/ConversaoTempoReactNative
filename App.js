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
