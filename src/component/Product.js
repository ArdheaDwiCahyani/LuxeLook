import React, {useState} from 'react'
import { ProductData } from '../../data'
import {Text, StyleSheet} from 'react-native'

const [xtProduct, setxtProduct] = useState(false)

function ItemProduct({ item }) {
    return (
      <View style={styles.recContainer2}>
        <Image style={styles.recImage} source={{ uri: item.image }} />
        <TouchableOpacity onPress={() => onSelectedFav(item)} style={{ position: 'absolute', right: 0, padding: 2 }}>
          <Heart variant={item.selected ? 'Bold' : 'linear'} color={item.selected ? '#FF8A65' : '#D1D1D1'} />
        </TouchableOpacity>
        <Text style={styles.recDesk}>{item.namaProduk}</Text>
        <Text style={styles.recPrice}>{item.hargaProduk}</Text>
      </View>
    )
  }

async function onSelectedFav(item) {
    try {
      item.selected = !item.selected
      setxtProduct(!xtProduct)
    } catch (e) {
      console.log(e);
    }
  }

const Product = () => {
    return (
        <FlatList
        data={ProductData}
        extraData={xtProduct}
        numColumns={2}
        contentContainerStyle={styles.containerProduct}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={ItemProduct}
      />
    )
}

export default Product

const styles = StyleSheet.create({
    containerProduct : {
      marginLeft: 8,
      // paddingLeft : 16,
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  
    header: {
      height: 136,
      backgroundColor: 'white',
    },
  
    logoHeader: {
      width: win.width,
      height: 90,
      resizeMode: 'contain',
      position: 'absolute',
      alignSelf: 'center',
      top: 16,
    },
  
    searchContainer: {
      flexDirection: 'row',
      // alignItems: 'center',
      height: 52,
      elevation: 3,
      marginHorizontal: 14,
      borderRadius: 10,
      marginTop: -28,
      backgroundColor: '#F0F0FF',
    },
  
    searchContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    search: {
      marginHorizontal: 8,
      color: '#n',
      width: win.width - 138,
    },
  
    fiturContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 80,
      marginHorizontal: 14,
    },
  
    fiturContainer2: {
      marginTop: 32,
      alignItems: 'center',
    },
  
    fiturText: {
      fontSize: 10,
      color: '#674D7A',
    },
  
    iklanContainer: {
      marginTop: 16,
      height: 232,
    },
  
    iklanImage: {
      marginTop: 16,
      borderRadius: 15,
      width: win.width - 16,
      height: 212,
      marginHorizontal: 8,
      resizeMode: 'contain',
    },
  
    recContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 212,
      marginHorizontal: 8,
      padding: 2,
    },
  
    recHeader: {
      marginLeft: 8,
      marginTop: 16,
      marginBottom: 8,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#674D7A',
    },
  
    recContainer2: {
      marginRight : 20,
      height: 200,
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
  
  })
  
