import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const win = Dimensions.get('window')
export default OnboardingItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri : item.image}} style={styles.iklanImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
    },

    iklanImage: {
        borderRadius: 15,
        width: win.width - 16,
        height: 212,
        marginHorizontal: 8,
        resizeMode: 'contain',
      },
});