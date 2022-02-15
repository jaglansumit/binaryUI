import React, { Component } from 'react';
import { View, Image, Switch, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const ProfileComponent = (props) => {
    return (
        <View>

            <View style={{ flexDirection: 'row' }}>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image style={styles.uploadImage} resizeMode="contain" source={require('../../assets/images/uploadblue.png')}></Image>
                    <Text style={{ textAlign: 'center', color: '#6587e1', marginTop: 10 }}>Upload</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/images/bitmap.png')}></Image>
                </View>


                <View style={{ flex: 1, justifyContent: 'center' }}>
                   <Image style={styles.uploadImage} resizeMode="contain" source={require('../../assets/images/edit.png')}></Image>
                    <Text style={{ textAlign: 'center', color: '#6587e1', marginTop: 10 }}>Edit</Text>
                </View>


            </View>

            <Text style={{ fontSize: 32, textAlign: 'center', marginTop: 30 }}>john.doe</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30 }}>
                <Text>My Dashboard</Text>
                <Switch
                    style={{ alignSelf: 'center', justifyContent: 'center', transform: [{ scaleX: .8 }, { scaleY: .75 }] }}
                    value={true}
                />
            </View>

            <View style={styles.userStatContainer}>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.countText}>2.3K</Text>
                    <Text style={styles.countTitle}>Followers</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.countText}>50</Text>
                    <Text style={styles.countTitle}>Artworks</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.countText}>21</Text>
                    <Text style={styles.countTitle}>Exhibitions</Text>
                </View>

            </View>

            <View style={styles.statContainer}>

                <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 5 }}>
                    <Icon
                        name="heart-outline"
                        color="red"
                        style={{ alignSelf: 'center' }}
                        size={17}
                    />
                    <Text style={styles.statTitle}>120</Text>
                </View>


                <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 5 }}>
                    <Icon
                        name="send-sharp"
                        color="#6587e1"
                        style={{ alignSelf: 'center' }}
                        size={17}
                    />
                    <Text style={styles.statTitle}>43K</Text>
                </View>


                <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 5 }}>
                    <Icon
                        name="share-social-outline"
                        color="#6587e1"
                        style={{ alignSelf: 'center' }}
                        size={17}
                    />
                    <Text style={styles.statTitle}>2.3K</Text>
                </View>

            </View>

            <View style={{flexDirection: 'row', margin: 20, height: 40}}>
                <View style={{flex: 1, backgroundColor: '#5f0e47', justifyContent: 'center'}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 12}}> pallette</Text>
                </View>
                <View style={{flex: 1, backgroundColor: '#9f013d'}}></View>
                <View style={{flex: 1, backgroundColor: '#d90034'}}></View>
                <View style={{flex: 1, backgroundColor: '#ff4617'}}></View>
                <View style={{flex: 1, backgroundColor: '#ffc100'}}></View>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    countText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 23,
    },
    countTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 12
    },
    statTitle: {
        alignSelf: 'center',
        fontSize: 18,
        paddingLeft: 4
    },
    statContainer: {
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 25,
        justifyContent: 'center'
    },
    userStatContainer: {
        flexDirection: 'row', 
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        padding: 15, 
        marginRight: 15, 
        marginLeft: 15, 
        borderColor: '#d8d8d8'
    },
    uploadImage : {
        height: 40, 
        width: 40, 
        alignSelf: 'center'
    },
})

export default ProfileComponent;