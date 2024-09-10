import React from 'react';
import { Image, StyleSheet, StatusBar, Platform, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  const handleSignUp = () => {
    navigation.navigate('signIn');
  };

  return (
    < View style={styles.container}>
      {/* <StatusBar
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0.3)"
        // barStyle="light-content"
        showHideTransition="slide"
      /> */}

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

      <Text style={styles.text}>
        Sparkle & Shine Transform{'\n'}
        Your Drive with Every Wash!
      </Text>

      <TouchableOpacity style={styles.button} onPress={
        () => {
          navigation.navigate('signUp');
        }
      }>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Already have an account?
        </Text>
        <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
          <Text style={styles.signUpUnderline}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    paddingBottom: 20,
  },
  logo: {
    width: '80%',
    height: '60%',
    marginTop: '10%',
  },
  topLeftLogo: {
    width: 300,
    height: 200,
    opacity: 0.5,
    position: 'absolute',
    // top: Platform.OS === 'android' ? -(StatusBar.currentHeight || 0) : 0,
    left: -50,
  },
  topRightLogo: {
    width: 150,
    height: 150,
    opacity: 0.5,
    position: 'absolute',
    // top: Platform.OS === 'android' ? -(StatusBar.currentHeight || 0) : 0,
    right: -20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#808080',
    lineHeight: 36,
    fontFamily: 'Poppins',
    marginHorizontal: 20,
    marginBottom: 30,
    bottom: 70,
  },
  button: {
    backgroundColor: '#A3CFFF',
    borderColor: '#94C7FF',
    borderWidth: 1,
    width: '80%',
    height: 60,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#092A4D',
    fontFamily: 'Inter',
    lineHeight: 29,
  },
  signUpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 50,
    flexDirection: 'row',
  },
  signUpBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
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
});

export default WelcomeScreen;