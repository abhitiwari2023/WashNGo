import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('welcome');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/top-left.png')}
                style={styles.topLeftLogo}
                resizeMode="contain"
            />

            <Image
                source={require('../assets/top-right.png')}
                style={styles.topRightLogo}
                resizeMode="contain"
            />

            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Image
                source={require('../assets/bottom-right.png')}
                style={styles.bottomRightLogo}
                resizeMode="contain"
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: '80%',
        height: '80%',
    },
    topLeftLogo: {
        width: 500,
        height: 300,
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: -130,
    },
    topRightLogo: {
        width: 250,
        height: 250,
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: 150,
    },
    bottomRightLogo: {
        width: 250,
        height: 250,
        opacity: 1,
        position: 'absolute',
        bottom: -10,
        right: 0,
    }
});

export default SplashScreen;