import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../theme/color";

const AddProductForm = () => {
    const dataCategory = [
        { id: 1, name: "Sensitive" },
        { id: 2, name: "Oily" },
        { id: 3, name: "Acne" },
        { id: 4, name: "Dry" },
    ];

    const [productData, setProductData] = useState({
        nameProduct: "",
        description: "",
        category: {},
    });

    const handleChange = (key, value) => {
        setProductData({
            ...productData,
            [key]: value,
        });
    };

    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color='#ffffff' variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.nameProduct}>Add Product</Text>
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
                        // value={productData.nameProduct}
                        onChangeText={(text) => handleChange("name", text)}
                        placeholderTextColor="#A5A5A5"
                        multiline
                        style={textInput.nameProduct}
                    />
                </View>

                <View style={[textInput.borderDashed, { minHeight: 250 }]}>
                    <TextInput
                        placeholder="Product Description"
                        // value={productData.description}
                        onChangeText={(text) => handleChange("description", text)}
                        placeholderTextColor="#A5A5A5"
                        multiline
                        style={textInput.description}
                    />
                </View>

                <View style={[textInput.borderDashed]}>
                    <Text
                        style={{
                            fontSize: 12,
                            color: "#A5A5A5"
                        }}
                    >
                        Skin Type
                    </Text>
                    <View style={category.container}>
                        {dataCategory.map((item, index) => {
                            const fillBg =
                                item.id === productData.category.id
                                    ? '#6D4D8C'
                                    : '#F3F3F3';
                            const color =
                                item.id === productData.category.id
                                    ? '#FFFFFF'
                                    : '#A5A5A5';
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() =>
                                        handleChange("category", { id: item.id, name: item.name })
                                    }
                                    style={[category.item, { backgroundColor: fillBg }]}
                                >
                                    <Text style={[category.name, { color: color }]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
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
    description: {
        fontSize: 12,
        color: '#000000',
        padding: 0,
    }
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
