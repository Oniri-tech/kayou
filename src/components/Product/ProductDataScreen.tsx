import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Product from '../../types/Product';




export default function ProductDataScreen({route}) {
    const product = route.params.product;
    console.log(product);

    return(
        <SafeAreaView>
            <View style={{ flexDirection: 'column', backgroundColor: '#FFEFD4' }}>
                <View style={{ backgroundColor: '#B9C74E', alignItems: "center" }}>
                    <Image style={styles.image} source={{uri: `${product?.image_front_url}`}}/>
                </View>
                <ScrollView style= {{padding: 15, margin: 15, borderRadius: 4, backgroundColor: '#DCDA90' }}>
                    <View style= {{ flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Text>{ product.product_name }</Text>
                            <Text>Catégorie : { product.categories }</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: "flex-end" }}>
                            <Text>NOVA : { product.nova_group }</Text>
                            <Text>Nutriscore : { product.nutriscore_grade != undefined ?product.nutriscore_grade.toUpperCase() : product.nutriscore_grade } </Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </ScrollView>
                
            </View>
                        
        </SafeAreaView>
    )

};

var styles = StyleSheet.create({
    image: {
        width: 107,
        height: 165,
        padding: 10
      }
    })
