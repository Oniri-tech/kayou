import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductListItem from './ProductListItem'


export default function ProductListScreen ({route}) {

    console.log(route.params.product);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={route.params.product} renderItem={({ item }) => <ProductListItem product={ item }/>} keyExtractor={item => item.code}/>
        </SafeAreaView>
    )
}
