import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function SearchScreen({ navigation }) {

    const [text, onChangeText] = React.useState("");

    function fetchData(params: string){
        fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${params}&search_simple=1&action=process&json=1`)
          .then((response) => response.json())
          .then((json) => navigation.navigate('results', {product: json.products}))
    }
        

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <TextInput style={styles.input} value={text} onChangeText={onChangeText} placeholder="Rechercher un Produit..." />
            <Pressable style={styles.button} onPress={() => {fetchData(text)}}>
                <Text>Rechercher</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 40,
        marginHorizontal: 12,
        backgroundColor: '#c9c8c3',
    }
})
