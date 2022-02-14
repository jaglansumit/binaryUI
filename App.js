import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, 
  View
} from 'react-native';
import TopImage from './src/assets/images/image_two.svg';
import MiddleImage from './src/assets/images/image_one.svg'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginLeft: 24, marginTop: 31}}>
         <TopImage></TopImage>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
         <MiddleImage></MiddleImage>
      </View>

      <Text style={{margin: 36, fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

      <View>
         <View>
           
         </View>  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor:'green'
	},
});

export default App;