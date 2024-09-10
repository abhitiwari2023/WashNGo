import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = () => {

        // Validate input
        if (!email || !password) {
            console.error('All fields are required');
            return;
        }

        // Email validation regex
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     console.error('Invalid email format');
        //     return;
        // }

        // Password strength check (example: at least 8 characters)
        if (password.length < 8) {
            console.error('Password must be at least 8 characters long');
            return;
        }

        // Perform login API call
        fetch('https://tor.appdevelopers.mobi/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: email,
                password: password, 
            }),
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === true) {
                    navigation.navigate('home', { name: response.data.name });
                } else {
                    // Handle login failure
                    console.error('Login failed:', response.message);
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = () => {
        navigation.navigate('signUp');
    };

    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>Sign In</Text>

                <Text style={styles.welcomeText}>Hi ! Welcome back,{'\n'}you have been missed</Text>

                <Text style={styles.inputLabel}>Email</Text>
                <View style={styles.inputContainer}>
                    <Image
                        source={require('../assets/email.png')}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#808080"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.inputContainer}>
                    <Image
                        source={require('../assets/password.png')}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#808080"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={toggleShowPassword}>
                        <Image
                            source={showPassword ? require('../assets/eye.png') : require('../assets/eye.png')}
                            style={styles.inputIcon}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialIconsContainer}>
                    <TouchableOpacity style={styles.socialIconButton} onPress={() => { navigation.navigate('home'); }}>
                        <Image
                            source={require('../assets/google.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIconButton}>
                        <Image
                            source={require('../assets/apple.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
                        <Text style={styles.signUpUnderline}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.termsText}>
                    By login or sign up, you agree to our terms of use and privacy policy
                </Text>

                <Image
                    source={require('../assets/bottom-left.png')}
                    style={styles.bottomLeftImage}
                />

            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({

    scrollViewContent: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'transparent',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 30,
        marginTop: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        alignSelf: 'flex-start',
    },
    welcomeText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    inputLabel: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '100%',
        borderColor: '#808080',
        borderWidth: 1,
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#000000',

    },
    button: {
        backgroundColor: '#94C7FF',
        padding: 15,
        borderRadius: 32,
        width: '100%',
        marginTop: 10,
        borderColor: '#94C7FF',
        borderWidth: 1,
    },
    buttonText: {
        color: '#092A4D',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    forgotPasswordContainer: {
        marginTop: 5,
        marginBottom: 15,
        alignItems: 'flex-end',
        width: '100%',
    },
    forgotPasswordText: {
        color: '#000000',
        fontSize: 14,
        textDecorationLine: 'underline',
        fontWeight: '500',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#A3CFFF',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#808080',
        fontSize: 16,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIconButton: {
        marginHorizontal: 10,
    },
    socialIcon: {
        width: 40,
        height: 40,
    },
    signUpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    signUpBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    signUpUnderline: {
        textDecorationLine: 'underline',
        color: '#000000',
        fontWeight: '500',
        padding: 10,
    },
    termsText: {
        marginTop: 20,
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    bottomLeftImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 140,
        height: 140,
        opacityacity: 0.5,
    }
});

export default SignInScreen;