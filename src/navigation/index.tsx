import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}
