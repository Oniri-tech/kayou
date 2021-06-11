import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ProductDataScreen from '../components/Product/ProductDataScreen';
import ProductListScreen from '../components/ProductList/ProductListScreen';
import SearchScreen from '../components/search/SearchScreen';
import Product from '../types/Product';

type SearchStackParamList = {
    search: undefined
    results: {products: Product[]}
    productInfo: {product: Product}

}
const {Navigator, Screen} = createStackNavigator<SearchStackParamList>();

export default function SearchStack() {
    return (
        <Navigator>
            <Screen name='search' component={SearchScreen}/>
            <Screen name='results' component={ProductListScreen}/>
            <Screen name='productInfo' component={ProductDataScreen} />
        </Navigator>
    )
}
