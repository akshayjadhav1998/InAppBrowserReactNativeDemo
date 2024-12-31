import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  InAppBrowser: { url: string };
  Home: undefined;
};

const InAppBrowser = ({ route, navigation }: { route: RouteProp<RootStackParamList, 'InAppBrowser'>; navigation: StackNavigationProp<RootStackParamList, 'InAppBrowser'> }) => {

    const { url } = route.params;

    const handleNavigationToHome = (navState: any) => {
      if(navState.url === 'https://www.myntra.com/men-jeans?sort=popularity') {
        navigation.navigate('Home', undefined);
        console.log('Navigated to Home screen');
      }
    };

    return <View style={styles.container}>
        <WebView
        source = {{uri: url}}
        onNavigationStateChange={handleNavigationToHome}
        />
    </View>;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default InAppBrowser;
