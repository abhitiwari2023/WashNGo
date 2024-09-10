import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Logo from '../assets/logo.png';

const HomeScreen = ({ route, navigation }) => {
    const { name } = route.params;


    const handleLogout = () => {
        navigation.navigate('welcome');
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.welcomeText}>Welcome, {name}!</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        marginTop: 100,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        alignSelf: 'center',
        marginTop: 100,
    },
    logoutButton: {
        backgroundColor: '#94C7FF',
        padding: 15,
        borderRadius: 32,
        width: '100%',
        marginTop: 100,
        borderColor: '#94C7FF',
        borderWidth: 1,
    },
    logoutButtonText: {
        color: '#092A4D',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
});

export default HomeScreen;