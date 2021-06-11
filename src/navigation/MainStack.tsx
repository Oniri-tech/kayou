import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ScanCodeScreen from '../components/ScanCode/ScanCodeScreen';
import ProfileStack from './ProfileStack';
import SearchStack from './SearchStack';


const {Navigator, Screen} = createBottomTabNavigator();

export default function MainStack() {
    return (
        <Navigator>

            <Screen name="scan" component={ScanCodeScreen}/>
            <Screen name="rechercher" component={SearchStack} />
            <Screen name="profil" component={ProfileStack} />
            
        </Navigator>
    )
}
