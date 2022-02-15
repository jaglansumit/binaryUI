import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ServiceItem = ({data}) => {
    return (
        <View style={styles.container}>
            <Image style={{ height: 110, width: 110 }} resizeMode="contain" source={data.image}></Image>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.content}>{data.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignContent: 'flex-start', 
        alignItems: 'flex-start', 
        marginLeft: 30, 
        marginTop: 50,
        marginBottom: 20
    },
    title : {
        fontSize: 22 ,
        marginTop: 10
    },
    content : {
        fontSize: 16, 
        color: '#a6a6a6', 
        marginTop: 20
    }
})

export default ServiceItem;