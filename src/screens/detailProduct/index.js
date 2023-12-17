import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions, RefreshControl, useCallback } from 'react-native'
import { ArrowLeft, Setting2, InfoCircle, Bag2, More, Heart, Star1, Edit, Trash } from 'iconsax-react-native'
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ActionSheet from 'react-native-actions-sheet';

export default function DetailProduct() {
    //     async function deleteData() {
    //         var id = route.params?.data.id
    //         const data = await fetch('https://657585a9b2fbb8f6509d2fda.mockapi.io/luxelook/products/' + id, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //         })
    //         nav.navigate('Home', { isLoading: Math.random() })
    //         console.log(await data.json())
    //     }
    const route = useRoute()
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const actionSheetRef = useRef(null);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };
    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };

    useEffect(() => {
        console.log(route.params?.data.id);
        // const subscriber = firestore()
        //     .collection('product')
        //     .doc(route.params?.data.id)
        //     .onSnapshot(documentSnapshot => {
        //         const productData = documentSnapshot.data();
        //         if (productData) {
        //             console.log('Product data: ', productData);
        //             setSelectedProduct(productData);
        //         } else {
        //             console.log(`Product with ID ${productId} not found.`);
        //         }
        //     });
        // setLoading(false);
        // return () => subscriber();
    }, [route.params?.isLoading]);

    const navigateEdit = () => {
        closeActionSheet();
        navigation.navigate('editProduct', { data: route.params?.data });
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            await firestore()
                .collection('product')
                .doc(route.params?.data.id)
                .delete()
                .then(() => {
                    console.log('Product deleted!');
                });
            if (selectedProduct?.image) {
                const imageRef = storage().refFromURL(selectedProduct?.image);
                await imageRef.delete();
            }
            console.log('Product deleted!');
            closeActionSheet();
            setSelectedProduct(null);
            setLoading(false)
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    };

    const navigation = useNavigation()
    const iconCount = 5;
    const iconsArray = Array.from({ length: iconCount }, (v, i) => i)
    const item = route.params?.data
    // const {productId} = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                        <ArrowLeft size={20} variant='Linear' color='black' />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '500', paddingLeft: 14, fontSize: 16, color: 'black', paddingEnd: 36 }}> {route.params?.data.nameProduct} </Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Bag2 size={22} variant='Linear' color='#752680' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openActionSheet}>
                        <More size={22} variant='Linear' color='#752680' style={{ marginLeft: 12 }} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* tampilan produk */}
            <View style={styles.imageProduct}>
                <Heart size={24} variant='Linear' color='#A5A5A5' style={{ marginRight: 8, marginTop: 12, alignSelf: 'flex-end' }} />
                <Image
                    source={{ uri: route.params?.data.image }}
                    style={{ width: 200, height: 200, resizeMode: 'cover', }}
                />
                <View style={styles.slides}>
                    <Text style={{ color: '#A5A5A5', fontSize: 12 }}>1/5</Text>
                </View>
            </View>

            {/* tampilan caption product */}
            <View style={styles.captProduct}>
                <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: 700, letterSpacing: 0.8, fontSize: 16, color: 'black' }}>{route.params?.data.merk}</Text>
                <Text style={{ marginBottom: 5, fontWeight: 300, letterSpacing: 0.8, fontSize: 16, color: 'black' }}>{route.params?.data.nameProduct}</Text>
                <Text style={{ marginBottom: 5, fontWeight: 600, fontSize: 14, color: '#6D4D8C' }}>Rp{route.params?.data.price}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {iconsArray.map((index) => (
                        <Star1 size={18} variant='Bold' color='#6D4D8C' />
                    ))}
                    <Text style={{ color: 'black', fontWeight: 500, fontSize: 12, paddingLeft: 7 }}>4.5</Text>
                    <Text style={{ color: '#A5A5A5', fontWeight: 400, fontSize: 12, paddingLeft: 5 }}>(62)</Text>
                </View>
            </View>

            {/* deskripsi produk */}
            <View style={styles.descProduct1}>
                <Text style={{ color: 'black', fontSize: 12, letterSpacing: 0.6, fontWeight: 600 }}>DESCRIPTION</Text>
            </View>
            <View style={styles.descProduct2}>
                <Text style={{ color: 'black', lineHeight: 20, fontSize: 12, fontWeight: 400, }}>
                    {route.params?.data.description}
                </Text>
                <Text style={{ textDecorationLine: 'underline', marginTop: 8, color: '#6D4D8C', fontSize: 10, fontWeight: 700, lineHeight: 13.5, }}>SEE MORE</Text>
            </View>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    backgroundColor: '#A793BA'
                }}
                indicatorStyle={{
                    width: 100,
                }}
                gestureEnabled={true}
                defaultOverlayOpacity={0.3}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={navigateEdit}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                        }}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={handleDelete}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                        }}>
                        Delete
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={closeActionSheet}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </ActionSheet>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#f5f5f5',
        height: 80,
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        // borderBottomWidth: 1,
        justifyContent: "space-between",
        borderColor: '#d3d3d3',
        flexDirection: 'row',
        paddingBottom: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        position: 'relative',
        // flexWrap: 'wrap',
    },
    imageProduct: {
        backgroundColor: 'white',
        height: 272,
        // backgroundColor: 'purple',
        borderBottomWidth: 2,
        borderBottomColor: '#F3F3F3',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    slides: {
        backgroundColor: '#f5f5f5',
        alignSelf: 'flex-end',
        marginRight: 8,
        borderRadius: 12,
        width: 49.63,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 8,
    },
    captProduct: {
        backgroundColor: 'white',
        height: 132,
        paddingHorizontal: 8,
    },
    descProduct1: {
        backgroundColor: 'white',
        height: 50,
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f5f5f5',
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    descProduct2: {
        paddingTop: 6,
        backgroundColor: 'white',
        height: 250,
        paddingHorizontal: 8,
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