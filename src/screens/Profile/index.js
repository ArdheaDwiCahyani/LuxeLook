import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions} from 'react-native'
import { Setting2, ShoppingCart, Note, ArrowRight2, Wallet, Box, TruckFast, MedalStar, Key, Location, ProfileDelete, MessageQuestion, LogoutCurve} from 'iconsax-react-native'
import profile from '../../assets/images/profile.jpg'

const win = Dimensions.get('window')

export default function Account() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.cartContainer}>
                    <Setting2 variant='Linear' color='white'/>
                    <ShoppingCart variant='Linear' color='white' style={[{marginLeft:14}]} />
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={profile} />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>ardheaa</Text>
                        <Text style={styles.profileFollow}>50 Following | 12 Followers</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.pesananContainer, {marginTop: 15}]}>
                <View style={styles.menuContent}>
                    <Note size={22} variant='Linear' color='black' />
                    <Text style={styles.pesananText}>Pesanan Saya</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.menuContent}>
                        <Text style={styles.pesananText}>Lihat Riwayat</Text>
                        <ArrowRight2 size={22} variant='Linear' color='black' />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.menuPesananContainer}>
                <TouchableOpacity style={styles.jenisPesanan}>
                    <Wallet size={22} variant='Linear' color='black' style={{ marginTop: 8,}}/>
                    <Text style={[styles.pesananText, {marginVertical: 8, fontSize: 10, }]}>Belum Bayar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.jenisPesanan}>
                    <Box size={22} variant='Linear' color='black' style={{ marginTop: 8,}}/>
                    <Text style={[styles.pesananText, {marginVertical: 8, fontSize: 10, }]}>Dikemas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.jenisPesanan}>
                    <TruckFast size={22} variant='Linear' color='black' style={{ marginTop: 8,}}/>
                    <Text style={[styles.pesananText, {marginVertical: 8, fontSize: 10, }]}>Dikirim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.jenisPesanan}>
                    <MedalStar size={22} variant='Linear' color='black' style={{ marginTop: 8,}}/>
                    <Text style={[styles.pesananText, {marginVertical: 8, fontSize: 10, }]}>Beri Penilaian</Text>
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
            </View>
            <TouchableOpacity style={styles.buttonSignOut}>
                <LogoutCurve size={20} variant='Linear' color='white'/>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

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
        marginTop : 30,
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
        paddingLeft:8,
    },
})