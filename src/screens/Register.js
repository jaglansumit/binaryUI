import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text, 
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
  Image
} from 'react-native';
import MiddleImage from '../assets/svg/MiddleImage';
import Icon from "react-native-vector-icons/Ionicons";
import ServiceItem from '../components/common/ServiceItem';
import {Data} from '../utils/data';
import TopImage from '../assets/svg/TopImage';



export default class Register extends Component {

   _renderList() {
      return Data.map((data) => {
        return (
         <ServiceItem data={data}></ServiceItem>
        )
      })
  
  } 

render() {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
      <View style={styles.topImage}>
         <TopImage></TopImage>
      </View>

      <View style={styles.middleImage}>
         <MiddleImage></MiddleImage>
      </View>

      <Text style={{margin: 36, fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

      <View style={{flexDirection: 'row'}}>
         <View style={{flex: 1}}>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Home')}
            style={styles.button}>
            <Icon
            name="arrow-forward"
            color="#fff"
            style={{alignSelf: 'center'}}
            size={25}
            />
            <Text style={styles.registerTitle}> register</Text>
            </TouchableOpacity>
         </View> 
         <View style={{flex: 1, justifyContent: 'center', marginLeft: 5}}>
            <Text style={{fontSize: 20}}>me as a collector</Text>
         </View>  
      </View>


      <View style={styles.trackContainer}>
            <Icon
            name="arrow-forward"
            color="#577bdf"
            style={{alignSelf: 'center'}}
            size={17}
            />
            <Text style={{color: '#577bdf', fontSize: 17}}> track my application</Text>
      </View>

      {this._renderList()}


      </ScrollView>
    </SafeAreaView>
  );
};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
   topImage : {
      marginLeft: 24, 
      marginTop: 31
   },
   middleImage : {
      justifyContent: 'center', 
      alignItems: 'center', 
      alignSelf: 'center'
   },
   button : {
      flexDirection: 'row', 
      backgroundColor: '#ec5151', 
      alignSelf: 'flex-end', 
      padding: 10, 
      justifyContent: 'center', 
      borderRadius: 10
   },
   registerTitle : {
      color: '#fff', 
      fontSize: 25
   },
   trackContainer : {
      flexDirection: 'row', 
      alignSelf: 'center', 
      justifyContent: 'center', 
      marginTop: 30
   }
});

