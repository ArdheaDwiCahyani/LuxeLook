import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import logo from '../../assets/images/logow2.png'
import auth from '@react-native-firebase/auth'


export default function SplashScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            if (auth().currentUser) {
                navigation.dispatch(StackActions.replace('Bottom'))
            } else {
                navigation.dispatch(StackActions.replace('Login'))
            }
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
            <Image style={styles.logo} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    logo: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
    },
})