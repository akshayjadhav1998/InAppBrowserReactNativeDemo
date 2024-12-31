import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
    },
    text: {
        textAlign: 'center' as 'center',
        fontWeight: 'bold' as 'bold',
        fontSize: 40,
    },
});

export default Home;
