import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Product from '../../types/Product';

export default function ProfileDataScreen() {
    const getStoredScan = async () => {
        setIsLoading(true);
        try {
          const storedScannedProducts = await AsyncStorage.getItem("@scanProducts");
          if (storedScannedProducts === null) {
            const emptyScannedArray: Product[] = [];
            await AsyncStorage.setItem("@quotes", JSON.stringify(emptyScannedArray));
            setProducts(emptyScannedArray);
          } else {
            const parsedStoredScanned = JSON.parse(storedScannedProducts);
            setProducts(parsedStoredScanned);
            console.log(scannedProducts);
          }
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
        
    };
    const navigation = useNavigation();
    const [scannedProducts, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {  })

    return (
        <SafeAreaView>
            { isLoading ?<ActivityIndicator size="large" /> : 
            <View>
                <Pressable onPress={() => {navigation.navigate('historic', {product:JSON.stringify(scannedProducts)})}}>
                    <Text> Nombre de produits scannés = {scannedProducts != undefined ? scannedProducts?.length: 0} </Text>
                </Pressable>
                <View>
                    
                </View>
            </View>
            }
        </SafeAreaView>
    )
}
