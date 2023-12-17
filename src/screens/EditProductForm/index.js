import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Add, AddSquare, ArrowLeft } from "iconsax-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';


const EditProductForm = () => {
    // const {productId} = route.params?.data.id;
    const route = useRoute()

    useEffect(() => {
        console.log(route.params?.data);
    }, []);

    const [productData, setProductData] = useState({
        nameProduct: '',
        merk: '',
        price: 0,
        description: '',
    });

    const handleChange = (key, value) => {
        setProductData({
            ...productData,
            [key]: value,
        });
    };

    const [image, setImage] = useState(null);
    const [oldImage, setOldImage] = useState(null);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const productId = route.params?.data.id

    useEffect(() => {
        const subscriber = firestore()
            .collection('product')
            .doc(productId)
            .onSnapshot(documentSnapshot => {
                const productData = documentSnapshot.data();
                if (productData) {
                    console.log('Product data: ', productData);
                    setProductData({
                        nameProduct: productData.nameProduct,
                        merk: productData.merk,
                        price: productData.price.toString(),
                        description: productData.description,
                    });
                    setOldImage(productData.image);
                    setImage(productData.image);
                    setLoading(false);
                } else {
                    console.log(`Product with ID`, (productId), `not found.`);
                }
            });
        setLoading(false);
        return () => subscriber();
    }, []);

    const handleImagePick = async () => {
        ImagePicker.openPicker({
            width: 272,
            height: 272,
            cropping: true,
        })
            .then(image => {
                console.log(image);
                setImage(image.path);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`productimages/${filename}`);
        try {
            if (image !== oldImage && oldImage) {
                const oldImageRef = storage().refFromURL(oldImage);
                await oldImageRef.delete();
            }
            if (image !== oldImage) {
                await reference.putFile(image);
            }
            const url =
                image !== oldImage ? await reference.getDownloadURL() : oldImage;
            await firestore().collection('product').doc(productId).update({
                nameProduct: productData.nameProduct,
                merk: productData.merk,
                price: productData.price.toString(),
                description: productData.description,
                image: url,
            });
            setLoading(false);
            console.log('Product Updated!');
            navigation.navigate('DetailProduct', { data: route.params.data, isLoading: Math.random() });
        } catch (error) {
            console.log(error);
        }
    };

    // async function addData() {
    //     var id=route.params?.data.id
    //     const data = await fetch('https://657585a9b2fbb8f6509d2fda.mockapi.io/luxelook/products/' + id, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: productData.nameProduct,
    //             merk: productData.merk,
    //             image: productData.image,
    //             description: productData.description,
    //             category: productData.category,
    //             price: parseInt(productData.price),
    //         })
    //     })
    //     navigation.navigate('Home', {isLoading:Math.random()})
    //     console.log(await data.json())
    // }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color='#ffffff' variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.nameProduct}>Edit Product</Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingVertical: 10,
                    gap: 10,
                }}
            >
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Product Name"
                        value={productData.nameProduct}
                        onChangeText={(text) => handleChange("nameProduct", text)}
                        placeholderTextColor="#A5A5A5"
                        multiline
                        style={textInput.nameProduct}
                    />
                </View>

                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Product Merk"
                        value={productData.merk}
                        onChangeText={(text) => handleChange("merk", text)}
                        placeholderTextColor="#A5A5A5"
                        multiline
                        style={textInput.nameProduct}
                    />
                </View>

                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Price"
                        value={productData.price}
                        onChangeText={(text) => handleChange("price", text)}
                        placeholderTextColor="#A5A5A5"
                        multiline
                        style={textInput.nameProduct}
                    />
                </View>

                <View style={[textInput.borderDashed]}>
                    <TextInput
                        placeholder="Product Description"
                        value={productData.description}
                        numberOfLines={4}
                        textAlignVertical="top"
                        onChangeText={(text) => handleChange("description", text)}
                        placeholderTextColor="#A5A5A5"
                        multiline
                        style={textInput.nameProduct}
                    />
                </View>

                {image ? (
                    <View style={{ position: 'relative' }}>
                        <FastImage
                            style={{ width: '100%', height: 127, borderRadius: 5 }}
                            source={{
                                uri: image,
                                headers: { Authorization: 'someAuthToken' },
                                priority: FastImage.priority.high,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                backgroundColor: 'blue',
                                borderRadius: 25,
                            }}
                            onPress={() => setImage(null)}>
                            <Add
                                size={20}
                                variant="Linear"
                                color='white'
                                style={{ transform: [{ rotate: '45deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={handleImagePick}>
                        <View
                            style={[
                                textInput.borderDashed,
                                {
                                    gap: 10,
                                    paddingVertical: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}>
                            <AddSquare color='#A5A5A5' variant="Linear" size={42} />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#A5A5A5',
                                }}>
                                Upload Thumbnail
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonLabel}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditProductForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        height: 72,
        elevation: 8,
        paddingTop: 40,
        paddingBottom: -20,
    },
    nameProduct: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold'
    },
    bottom: {
        backgroundColor: '#ffffff',
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 20,
        shadowColor: '#f3f3f3',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    button: {
        paddingHorizontal: 130,
        paddingVertical: 10,
        backgroundColor: '#674D7A',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLabel: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '400',

    },
});
const textInput = StyleSheet.create({
    borderDashed: {
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: '#f3f3f3',
    },
    nameProduct: {
        fontSize: 14,
        color: '#000000',
        padding: 0,
    },
});
const category = StyleSheet.create({
    nameProduct: {
        fontSize: 12,
        color: '#f3f3f3'
    },
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 25,
    },
    name: {
        fontSize: 10,
    },
})
