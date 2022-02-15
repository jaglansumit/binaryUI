import React, { Component } from 'react';
import {
   Button,
   SafeAreaView,
   StyleSheet,
   Switch,
   Image,
   Text,
   View
} from 'react-native';
import Header from '../components/common/Header';
import ProfileComponent from '../components/HomeComponents/ProfileComponent';
import ActionList from '../components/HomeComponents/ActionList';

export default class Home extends Component {

   render() {
      return (
         <SafeAreaView style={styles.container}>

            <Header />

            <ProfileComponent />

            <ActionList />
            
         </SafeAreaView>
      );
   }
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});