import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Header = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>

            <View style={{ flex: 1, paddingLeft: 20 }}>
                <Image style={{ width: 110, height: 100 }} resizeMode='contain' source={require('../../assets/images/logo.png')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                <View style={{ justifyContent: 'center', backgroundColor: 'rgb(217, 0, 52)', height: 40, width: 40, alignSelf: 'center', borderRadius: 20, padding: 4 }}>
                    <Icon
                        style={{ backgroundColor: 'yellow' }}
                        name="person-outline"
                        color="#fff"
                        style={{ alignSelf: 'center' }}
                        size={25}
                    />
                </View>
                <Icon
                    name="ios-add"
                    color="black"
                    style={{ alignSelf: 'center' }}
                    size={25}
                />
                <Icon
                    name="menu-outline"
                    color="black"
                    style={{ alignSelf: 'center' }}
                    size={25}
                />
            </View>

        </View>
    )
}

export default Header;