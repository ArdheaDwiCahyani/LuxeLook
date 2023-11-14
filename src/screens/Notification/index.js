import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import { ArrowLeft, Setting2, InfoCircle } from 'iconsax-react-native'

export default function Notification() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <ArrowLeft size={20} variant='Linear' color='black' />
                </TouchableOpacity>
                <Text style={{ fontWeight: '500', paddingLeft: 14, fontSize: 16, color: 'black' }}> Notification </Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <Setting2 size={20} variant='Linear' color='black' />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.headerContainer2}>
                <Text style={{ fontSize: 12, color: '#752680', fontWeight: '500', letterSpacing: 0.8 }}>Tandai sudah dibaca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notifContainer}>
                <View style={styles.iconNotif}>
                    <InfoCircle size={24} variant="Bold" color="#752680" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleNotif}>Selamat Datang di Luxe Look</Text>
                    <View>
                        <Text style={styles.contentNotif}>
                            Yuk, mulai explore beauty dan personal needsmu dengan LuxeLook. Nikmati berbagai promo menarik hanya untuk kamu
                        </Text>
                    </View>
                    <Text style={styles.dateNotifText}>15 Okt 2023, 12.31</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifContainer}>
                <View style={styles.iconNotif}>
                    <InfoCircle size={24} variant="Bold" color="#752680" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleNotif}>Selamat Datang di Luxe Look</Text>
                    <View>
                        <Text style={styles.contentNotif}>
                            Yuk, mulai explore beauty dan personal needsmu dengan LuxeLook. Nikmati berbagai promo menarik hanya untuk kamu
                        </Text>
                    </View>
                    <Text style={styles.dateNotifText}>15 Okt 2023, 12.31</Text>
                </View>
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
        backgroundColor: 'white',
        height: 72,
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        flexDirection: 'row',
        paddingBottom: 16,
    },

    iconContainer: {
        paddingLeft: 158,
        paddingRight: 18,
    },

    headerContainer2: {
        height: 40,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    notifContainer: {
        height: 158,
        backgroundColor: '#ddcfe8',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 10,
    },

    textContainer: {
        flexDirection: 'column',
        marginRight: 14,
        marginHorizontal: 12,
        width: 290,
    },

    titleNotif: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        flexDirection: 'column',
    },

    iconNotif: {
        justifyContent: 'flex-start'
    },

    contentNotif: {
        fontSize: 12,
        color: 'black',
        paddingTop: 8,
        lineHeight: 20,
    },

    dateNotifText: {
        color: '#918c8c',
        fontSize: 8,
        letterSpacing: 2,
        marginTop: 14,
    }
})