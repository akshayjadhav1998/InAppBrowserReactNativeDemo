import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RouterParams from '../router/routerParams';

type InAppBrowserProps = {
    route: RouteProp<RouterParams, 'InAppBrowser'>;
    navigation: StackNavigationProp<RouterParams, 'InAppBrowser'>;
};

const InAppBrowser : React.FC<InAppBrowserProps> = ({ route, navigation }) => {

    const { url } = route.params;

    const handleNavigationToHome = (navState: any) => {
      if(navState.url === 'https://www.myntra.com/men-jeans?sort=popularity') {
        navigation.replace('Home');
        console.log('Navigated to Home screen');
      }
    };

    return <View style={styles.container}>
        <WebView
        source = {{uri: url}}
        onNavigationStateChange={handleNavigationToHome}
        startInLoadingState={true}
        />
    </View>;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default InAppBrowser;
