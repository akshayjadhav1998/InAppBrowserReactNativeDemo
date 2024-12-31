import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const Login: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {

    const openInAppBrowser = () => {
        console.log('Open in app browser');

        navigation.navigate('InAppBrowser',{
            url : 'https://www.myntra.com/',
          });
    };

    return <View style={styles.containerStyle}>
        <TouchableOpacity style={styles.loginButton} onPress={openInAppBrowser}>
            <Text style={styles.loginButtonContent}>LOG IN</Text>
          </TouchableOpacity>
    </View>;
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center' as 'center',
    },
    loginButton: {
      backgroundColor: '#008EC9',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    loginButtonContent: {
      color: 'white',
      textAlign: 'center' as 'center',
    },
  };

export default Login;
