import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Hamburger({ isSidebarOpen, setIsSidebarOpen }: any) {






  


    return (
            <View style={{ height: '100%', width: '100%', }}>
                            <Ionicons name='wine' size={24} color="#FFFFFF" style={{marginRight: 10}}></Ionicons>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#EADEF7',
        width: '100%',
        height: '100%',
        paddingBottom: 0,
        // borderWidth: 2,
        // borderColor: 'red',
    },
    topbar: {
        width: windowWidth,
        height: 60,
        backgroundColor: '#FEF7FF',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        top: '5%',
        position: 'absolute',

    },
    sidebar: {
        position: 'absolute',
        top: '5%',
        left: 0,
        width: 230,
        height: '100%',
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',

        // transform: [{ translateX: isSidebarOpen ? 0 : -200 }],
        // gradient: 'linear-gradient(180deg, #333 0%, #333 100%)',
        // backgroundImage: 'linear-gradient(180deg, #674593 8%, #492577 94%)',
        // transition: 'transform 0.5s',
    },
    sidebarGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundImage: 'linear-gradient(180deg, #674593 100%, #492577 100%)',
    },
    topbarText: {
        color: '#242424',
        fontSize: 18,
    },
    sidebarItem: {
        // padding: 10,
        color: '#fff',
        fontSize: 18,

    },
    subMenu: {
        // borderWidth: 1,
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
        // borderColor: 'red',
        // marginLeft: 10,
    }
});