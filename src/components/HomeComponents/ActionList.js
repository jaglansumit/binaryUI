import React, { Component } from 'react';
import { View, Image, Switch, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const ActionList = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image style={styles.actionImage} resizeMode="contain" source={require('../../assets/images/upload.png')}></Image>
           <Text style={[styles.actionTitle,{alignSelf: 'center', borderBottomWidth: 2, borderBottomColor: '#ffb501', paddingBottom: 7, paddingLeft: 10, paddingRight: 10}]}>Upload</Text>
        </View>



        <View style={{ flex: 1, justifyContent: 'center' }}>
           <Image style={styles.actionImage} resizeMode="contain" source={require('../../assets/images/image.png')}></Image>
           <Text style={styles.actionTitle}>Upload</Text>
        </View>


        <View style={{ flex: 1, justifyContent: 'center' }}>
           <Image style={styles.actionImage} resizeMode="contain" source={require('../../assets/images/revenue.png')}></Image>
           <Text style={styles.actionTitle}>Revenue</Text>
        </View>


     </View>
    )
}

const styles = StyleSheet.create({
    actionImage : {
        height: 40, 
        width: 40, 
        alignSelf: 'center'
    },
    actionTitle: {
        textAlign: 'center', 
        color: '#a7a7a7', 
        fontWeight: '700',
        marginTop: 10
    }
})

export default ActionList;