import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import ProductDataScreen from '../components/Product/ProductDataScreen';
import ProductListScreen from '../components/ProductList/ProductListScreen';
import ProfileDataScreen from '../components/Profile/ProfileScreen';
import Product from '../types/Product';

type ProfileStackParamList = {
    profile: undefined
    historic: {products: Product[]}
    productInfo: {product: Product}

}

const {Navigator, Screen} = createStackNavigator <ProfileStackParamList>();
export default function ProfileStack() {
    return (
        <Navigator>
            <Screen name="profile" component={ProfileDataScreen}/>
            <Screen name="historic" component={ProductListScreen}/>
            <Screen name='productInfo' component={ProductDataScreen} />
        </Navigator>
    )
}
