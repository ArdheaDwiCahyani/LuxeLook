import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import { BoxTime, BoxRemove, Trash, TruckTime, Add, Setting2, ShoppingCart, Note, ArrowRight2, Wallet, Box, TruckFast, MedalStar, Key, Location, ProfileDelete, MessageQuestion, LogoutCurve } from 'iconsax-react-native'
import profile from '../../assets/images/profile.jpg'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';

const win = Dimensions.get('window')
const Account = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.cartContainer}>
                        <Setting2 variant='Linear' color='white' />
                        <ShoppingCart variant='Linear' color='white' style={[{ marginLeft: 14 }]} />
                    </TouchableOpacity>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImage} source={profile} />
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>ardheaa</Text>
                            <Text style={styles.profileFollow}>50 Following | 12 Followers</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.pesananContainer, { marginTop: 15 }]}>
                    <View style={styles.menuContent}>
                        <Note size={22} variant='Linear' color='black' />
                        <Text style={styles.pesananText}>Status Pesanan</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.menuContent}>
                            <Text style={styles.pesananText}>Riwayat Pesanan</Text>
                            <ArrowRight2 size={22} variant='Linear' color='black' />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuPesananContainer}>
                    <TouchableOpacity style={styles.jenisPesanan}>
                        <TruckTime size={22} variant='Linear' color='black' style={{ marginTop: 8, }} />
                        <Text style={[styles.pesananText, { marginVertical: 8, fontSize: 10, }]}>Perlu Dikirim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.jenisPesanan}>
                        <BoxRemove size={22} variant='Linear' color='black' style={{ marginTop: 8, }} />
                        <Text style={[styles.pesananText, { marginVertical: 8, fontSize: 10, }]}>Pembatalan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.jenisPesanan}>
                        <BoxTime size={22} variant='Linear' color='black' style={{ marginTop: 8, }} />
                        <Text style={[styles.pesananText, { marginVertical: 8, fontSize: 10, }]}>Pengembalian</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.jenisPesanan}>
                        <MedalStar size={22} variant='Linear' color='black' style={{ marginTop: 8, }} />
                        <Text style={[styles.pesananText, { marginVertical: 8, fontSize: 10, }]}>Penilaian</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.menuContainer]}>
                    <TouchableOpacity style={styles.menuContentContainer}>
                        <View style={styles.menuInfo}>
                            <Key size={20} variant='Linear' color='black' />
                            <Text style={styles.menuText}>Change Password</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuContentContainer}>
                        <View style={styles.menuInfo}>
                            <Location size={20} variant='Linear' color='black' />
                            <Text style={styles.menuText}>Shipping Address</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuContentContainer}>
                        <View style={styles.menuInfo}>
                            <MessageQuestion size={20} variant='Linear' color='black' />
                            <Text style={styles.menuText}>Help Center</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuContentContainer}>
                        <View style={styles.menuInfo}>
                            <ProfileDelete size={20} variant='Linear' color='black' />
                            <Text style={styles.menuText}>Delete Account Inquiry</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuContentContainer}>
                        <View style={styles.menuInfo}>
                            <LogoutCurve size={20} variant='Linear' color='black' />
                            <Text style={styles.menuText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate("AddProduct")}
            >
                <Add color='#FFFFFF' variant='Linear' size={24} />
            </TouchableOpacity>
        </View>
    )
}
export default Account;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },

    headerContainer: {
        backgroundColor: '#674D7A',
        height: 148,
        justifyContent: 'center',
    },

    cartContainer: {
        marginTop: 30,
        paddingBottom: 8,
        justifyContent: 'flex-end',
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
    },

    profileImage: {
        height: 60,
        width: 60,
        borderRadius: 70,
    },

    profileInfo: {
        flexDirection: 'column',
    },

    profileName: {
        marginLeft: 16,
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },

    profileFollow: {
        marginTop: 2,
        marginLeft: 18,
        color: '#ddcfe8',
        fontSize: 10,
    },

    pesananContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        backgroundColor: 'white',
    },

    pesananText: {
        fontSize: 12,
        color: 'black',
        paddingLeft: 'auto',
        marginLeft: 4,
        marginVertical: 16,
    },

    menuContent: {
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center'
    },

    menuContentContainer: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#f1f2f3',
    },

    menuPesananContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        backgroundColor: 'white',
    },

    jenisPesanan: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column',
    },

    menuContainer: {
        backgroundColor: 'white',
        marginTop: 16,
    },

    menuText: {
        color: 'black',
        fontSize: 12,
        marginLeft: 8,
    },

    menuInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        marginLeft: 16,
    },

    buttonSignOut: {
        marginTop: 16,
        padding: 14,
        marginHorizontal: 16,
        backgroundColor: '#674D7A',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 24,
    },

    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '800',
        alignSelf: 'center',
        letterSpacing: 0.4,
        paddingLeft: 8,
    },

    floatingButton: {
        backgroundColor: '#674D7A',
        padding: 15,
        position: 'absolute',
        bottom: 24,
        right: 24,
        borderRadius: 40,
        shadowColor: '#F3F3F3',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
})