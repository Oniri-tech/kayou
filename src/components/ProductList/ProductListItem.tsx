import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Product from '../../types/Product';

type Props = {
    product: Product
}

export default function ProductListItem( {product}: Props ) {
    const {code, image_thumb_url, nutriscore_grade, product_name} = product;
    const navigation = useNavigation();

    function chooseProduct(params: string){
        fetch(`https://fr.openfoodfacts.org/api/v0/product/${params}`)
          .then((response) => response.json())
          .then((json) => navigation.navigate('productInfo', {product: json.product}))
    }
    return (
            <Pressable style={styles.container} onPress={() => {chooseProduct(code)}}>
                <Image style={styles.image} source={{uri: `${image_thumb_url}`}}/>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text>{product_name}</Text>
                    <Text>{nutriscore_grade != undefined ? nutriscore_grade.toUpperCase() : nutriscore_grade}</Text>
                </View>
            </Pressable> 
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#F3F3F3",
        borderColor: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        padding: 10,
        marginRight: 20,
    },
});