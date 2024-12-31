import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import Home from '../components/Home';
import InAppBrowser from '../components/InAppBrowser';
import RouterParams from './routerParams';


const Router = () => {
    const Stack = createNativeStackNavigator<RouterParams>();

    return (
        <NavigationContainer>
        <Stack.Navigator
         screenOptions = {{
            headerStyle : {backgroundColor: '#008EC9'},
            headerTitleAlign : 'center',
            headerTintColor : 'white',
          }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="InAppBrowser" component={InAppBrowser} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
