import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Product from "../../types/Product";

function ScanCodeScreen() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const [scannedProducts, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const getStoredScan = async () => {
        try {
          const storedScannedProducts = await AsyncStorage.getItem("@scanProducts");
          if (storedScannedProducts === null) {
            const emptyScannedArray: Product[] = [];
            await AsyncStorage.setItem("@quotes", JSON.stringify(emptyScannedArray));
            setProducts(emptyScannedArray);
          } else {
            const parsedStoredScanned = JSON.parse(storedScannedProducts);
            setProducts(parsedStoredScanned);
          }
        } catch (error) {
          console.error(error);
        }
    };
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        let response = await fetch(`https://fr.openfoodfacts.org/api/v0/product/${data}.json`);
        let json = await response.json();
        getStoredScan;
        await AsyncStorage.setItem("@scanProducts", JSON.stringify([...scannedProducts, json]));
        navigation.navigate('productInfo', {product: json.product});
      };
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      </View>
    );
  };
  
  export default ScanCodeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: "flex-end",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      color: "white",
    },
  });
  
