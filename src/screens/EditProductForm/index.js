import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


const EditProductForm = () => {

    const route = useRoute()

    const [productData, setProductData] = useState({
        nameProduct : route.params?.data.name,
        merk: route.params?.data.merk,
        price : route.params?.data.price.toString(),
        description : route.params?.data.description,
        image : route.params?.data.image,
    });

    const handleChange = (key, value) => {
        setProductData({
            ...productData,
            [key]: value,
        });
    };

    async function addData() {
        var id=route.params?.data.id
        const data = await fetch('https://657585a9b2fbb8f6509d2fda.mockapi.io/luxelook/products/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: productData.nameProduct,
                merk: productData.merk,
                image: productData.image,
                description: productData.description,
                category: productData.category,
                price: parseInt(productData.price),
            })
        })
        navigation.navigate('Home', {isLoading:Math.random()})
        console.log(await data.json())
    }

    const [image, setImage] = useState(null);
    const navigation = useNavigation();
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

                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Image"
                        value={productData.image}
                        onChangeText={(text) => handleChange("image", text)}
                        placeholderTextColor="#A5A5A5"
                        style={textInput.nameProduct}
                    />
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={addData}>
                    <Text style={styles.buttonLabel}>Simpan</Text>
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
