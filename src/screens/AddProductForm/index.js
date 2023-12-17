import React, { useState } from "react";
import { ActivityIndicator, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, loading} from "react-native";
import FastImage from 'react-native-fast-image';
import { ArrowLeft, AddSquare, Add } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


const AddProductForm = () => {
    const [loading, setLoading]  = useState(false)
    const [productData, setProductData] = useState({
        nameProduct: '',
        merk: '',
        price: '',
        description: '',
    });

    //fungsi untuk mengupload suatu gambar
    const handleUpload = async () => {
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`productimages/${filename}`);

        setLoading(true);
        try {
            await reference.putFile(image);
            const url = await reference.getDownloadURL();
            const data = await firestore().collection('product').add({
                nameProduct: productData.nameProduct,
                merk: productData.merk,
                price: parseInt(productData.price),
                description: productData.description,
                image: url,
            });
            console.log((await data.get()).data());
            setLoading(false);
            console.log('Product added!');
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (key, value) => {
        setProductData({
            ...productData,
            [key]: value,
        });
    };

    // async function addData() {
    //     const data = await fetch('https://657585a9b2fbb8f6509d2fda.mockapi.io/luxelook/products', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: productData.nameProduct,
    //             merk: productData.merk,
    //             image: productData.image,
    //             description: productData.description,
    //             price: parseInt(productData.price),
    //         })
    //     })
    //     navigation.navigate('Home')
    //     console.log(await data.json())
    // }

    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    //fungsi untuk mengambil gambar dari penyimpanan lokal
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
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color='#ffffff' variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.nameProduct}>Add Product</Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingVertical: 10,
                    gap: 10,
                }}>
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
                <View style={[textInput.borderDashed]}>
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
                <TouchableOpacity style={styles.button} onPress={handleUpload}>
                    <Text style={styles.buttonLabel}>Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddProductForm;

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
