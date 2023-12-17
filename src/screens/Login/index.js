import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import colors from '../../theme/color'

export default function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (auth().currentUser) {
            navigation.dispatch(StackActions.replace('Bottom'))
        }
    }, [])

    function clearText() {
        setEmail('')
        setPassword('')
    }

    async function login() {
        try {
            if (email != '' && password != '') {
                const data = await auth().signInWithEmailAndPassword(email, password)
                console.log(data);
                navigation.dispatch(StackActions.replace('Bottom'))
            } else {
                ToastAndroid.show('Email dan Password tidak boleh kosong!', ToastAndroid.SHORT)
            }
        } catch (e) {
            if (e.code == 'auth/invalid-email') {
                ToastAndroid.show('Format email tidak sesuai', ToastAndroid.SHORT)
            } else if (e.code == 'auth/invalid-credential') {
                ToastAndroid.show('Email atau Password salah', ToastAndroid.SHORT)
            }
            console.log(e.code);
        }
    }
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
            <KeyboardAvoidingView behavior='height'>
                <View style={styles.Card}>
                    <View style={styles.HeaderCard}>
                        <Text style={styles.HeadingText}>Sign In</Text>
                        <Image style={[styles.WelcomeImg]} source={require('../../assets/images/signIn.png')} />
                    </View>
                    <View style={styles.ContentCard}>
                        <Text style={{color: 'black', marginBottom: 8, marginLeft: 2, fontWeight: '600'}}>Email</Text>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={email} clearButtonMode='always' onChangeText={(text) => setEmail(text)} />
                        </View>
                        <Text style={{color: 'black', marginBottom: 8, marginLeft: 2, fontWeight: '600'}}>Password</Text>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={password} clearButtonMode='always' onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                        </View>
                        <View style={styles.ButtonCard}>
                            <TouchableOpacity style={styles.ButtonSignIn} onPress={login}>
                                <Text style={styles.SignInText}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonSignUp} onPress={() => [clearText(), navigation.navigate('Register')]}>
                                <Text style={styles.SignUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    Card: {
        height: 650,
        marginHorizontal: 16,
        borderRadius: 16,
        // backgroundColor: 'purple'

    },
    HeaderCard: {
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    WelcomeImg: {
        marginTop: 12,
        marginBottom: -32,
        width: 350,
        height: 200,
        resizeMode: 'contain',
        // backgroundColor: 'green'
    },
    ContentCard: {
        paddingHorizontal: 16,
        paddingVertical: 42,
        // backgroundColor: 'red'
    },
    InputCard: {
        // borderWidth: 1,
        // borderColor: '#979797',
        borderRadius: 10,
        paddingVertical: 2,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: '#F3F3F3'
    },
    StyleInput: { 
        borderWidth: 0,
        fontSize: 14,
        color: '#000000',
    },
    ButtonCard: {
        marginTop: 72,
    },
    ButtonSignIn: {
        alignItems: 'center',
        backgroundColor: '#6D4D8C',
        paddingVertical: 16,
        borderRadius: 10,
        marginBottom: 8,
    },
    ButtonSignUp: {
        alignItems: 'center',
        paddingVertical: 16,
        borderColor: '#6D4D8C',
        borderWidth: 1.5,
        borderRadius: 10
    },
    HeadingText: {
        color: '#6D4D8C',
        fontSize: 24,
        fontWeight: 'bold',
    },
    SignInText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    SignUpText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
    },
})