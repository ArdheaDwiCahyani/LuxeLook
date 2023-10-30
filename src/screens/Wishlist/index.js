import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { Heart, ArrowLeft, Notification, ShoppingCart } from 'iconsax-react-native'

const win = Dimensions.get('window')

export default function Wishlist() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <ArrowLeft size={20} variant='Linear' color='black' />
                </TouchableOpacity>
                <Text style={{ fontWeight: '500', paddingLeft: 14, fontSize: 16, color: 'black' }}> Wishlist </Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <Notification size={20} variant='Linear' color='black' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ShoppingCart size={20} variant='Linear' color='black' />
                </TouchableOpacity>
            </View>

            <View style={styles.productHeader}>
                <Text style={styles.textStyle}> All Products </Text>
                <Text style={styles.textStyle}> (4) </Text>
            </View>
            <View style={styles.recContainer}>
                <View style={styles.recContainer2}>
                    <Image style={styles.recImage} source={{ uri: 'https://dynamic.zacdn.com/q6ZkTf1fwJGrz-QGwWYR1KsYlzA=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/esqa-8531-6920504-1.jpg' }} />
                    <Text style={styles.recDesk}>Esqa Eyeshadow</Text>
                    <Text style={styles.recPrice}>Rp40.000</Text>
                    <TouchableOpacity style={styles.addContainer}>
                        <Text style={styles.textStyle2}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.recContainer2}>
                    <Image style={styles.recImage} source={{ uri: 'https://enviostore.com/media/product/4457/product_image-1695820614.jpeg' }} />
                    <Text style={styles.recDesk}>Hanasui Lipcream</Text>
                    <Text style={styles.recPrice}>Rp19.000</Text>
                    <TouchableOpacity style={styles.addContainer}>
                        <Text style={styles.textStyle2}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recContainer}>
                <View style={styles.recContainer2}>
                    <Image style={styles.recImage} source={{ uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-50385191/br-m036969-03955_maybelline-superstay-matte-ink-liquid-matte-lipstick-tahan-lama-hingga-16-jam_full02.jpg' }} />
                    <Text style={styles.recDesk}>Maybeline Super Stay</Text>
                    <Text style={styles.recPrice}>Rp98.000</Text>
                    <TouchableOpacity style={styles.addContainer}>
                        <Text style={styles.textStyle2}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.recContainer2}>
                    <Image style={styles.recImage} source={{ uri: 'https://cdnapi.sooplai.com/media/CACHE/images/products/223435/POWD-MAYB-001D-1/63d19237648b2168d91f9f144fa2dc4d.jpg' }} />
                    <Text style={styles.recDesk}>Maybeline Fit Me Powder</Text>
                    <Text style={styles.recPrice}>Rp40.000</Text>
                    <TouchableOpacity style={styles.addContainer}>
                        <Text style={styles.textStyle2}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    headerContainer: {
        height: 54,
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        flexDirection: 'row',
    },

    iconContainer: {
        paddingLeft: 158,
        paddingRight: 18,
    },

    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },

    textStyle2: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
    },

    productHeader: {
        marginTop: 10,
        width: 130,
        height: 32,
        alignItems: 'center',
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    addContainer: {
        width: 160,
        height: 28,
        backgroundColor: '#674D7A',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginBottom: 4,
    },

    recContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 230,
        marginHorizontal: 8,
        marginVertical: 12,
    },

    recContainer2: {
        marginRight: 20,
        height: 250,
        marginBottom: 10,
    },

    recImage: {
        height: 162,
        width: 162,
        borderRadius: 8,
    },

    recDesk: {
        marginTop: 4,
        fontSize: 10,
        fontWeight: '500',
        color: 'black',
    },

    recPrice: {
        fontSize: 10,
        fontWeight: '400',
        color: 'black',
    },

    containerProduct: {
        paddingTop: 16,
        marginLeft: 8,
    },
})