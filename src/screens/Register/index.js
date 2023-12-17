import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

export default function Register() {

    const nav = useNavigation()

    const [inputEmail, setInputEmail] = useState('')
    const [inputPass, setInputPass] = useState('')

    async function createAuth() {
        try {
            if (inputEmail != '' && inputPass != '') {
                const data = await auth().createUserWithEmailAndPassword(inputEmail, inputPass)
                console.log(data)
                nav.navigate('Login')
            } else {
                ToastAndroid.show('Email dan Password tidak boleh kosong!', ToastAndroid.SHORT)
            }
        } catch (e) {
            if (e.code == 'auth/invalid-email') {
                ToastAndroid.show('Format email tidak sesuai', ToastAndroid.SHORT)
            } else if (e.code == 'auth/weak-password') {
                ToastAndroid.show('Password harus lebih dari 6 char', ToastAndroid.SHORT)
            }
            // console.log(e.code);
        }
    }
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
            <KeyboardAvoidingView behavior='height'>
                <View style={styles.Card}>
                    <View style={styles.HeaderCard}>
                        <Text style={styles.HeadingText}>Sign Up</Text>
                        <Image style={styles.WelcomeImg} source={require('../../assets/images/signUp.png')} />
                    </View>
                    <View style={styles.ContentCard}>
                        <Text style={{ color: 'black', marginBottom: 8, marginLeft: 6, fontWeight: '600' }}>Email</Text>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={inputEmail} onChangeText={(text) => setInputEmail(text)} />
                        </View>
                        <Text style={{ color: 'black', marginBottom: 8, marginLeft: 6, fontWeight: '600' }}>Password</Text>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={inputPass} onChangeText={(text) => setInputPass(text)} />
                        </View>
                        <View style={styles.ButtonCard}>
                            <TouchableOpacity style={styles.ButtonSignIn} onPress={createAuth}>
                                <Text style={styles.SignInText}>Create Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonSignUp} onPress={() => nav.navigate('Login')}>
                                <Text style={styles.SignUpText}>Already have an account? Login</Text>
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
        paddingBottom: 32,
    },
    Card: {
        height: 650,
        marginHorizontal: 16,
        borderRadius: 16,
    },
    HeaderCard: {
        alignItems: 'center',
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
        marginTop: 24,
        paddingHorizontal: 16,
        paddingVertical: 42,
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
        color: '#000',
    },
    ButtonCard: {
        marginTop: 24,
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
    },
    HeadingText: {
        color: '#6D4D8C',
        fontSize: 24,
        fontWeight: 'bold',
    },
    SignInText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
    SignUpText: {
        marginTop: 80,
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
})