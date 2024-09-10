import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';

const CustomCheckbox = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity onPress={() => onValueChange(!value)} style={styles.checkbox}>
      {value && <View style={styles.checkboxInner} />}
    </TouchableOpacity>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSignUp = async () => {
    // Validate input
    if (!email || !password || !name) {
      console.error('All fields are required');
      return;
    }

    if (!agreeTerms) {
      console.error('You must agree to the terms and conditions');
      return;
    }

    // Email validation regex
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   console.error('Invalid email format');
    //   return;
    // }

    // Password strength check (example: at least 8 characters)
    if (password.length < 8) {
      console.error('Password must be at least 8 characters long');
      return;
    }

    fetch('https://tor.appdevelopers.mobi/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
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

  const handleSignIn = () => {
    navigation.navigate('signIn');
  };

  return (

    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Sign UP</Text>

        <Text style={styles.welcomeText}>Fill in the below form and add life to {'\n'}your car!</Text>

        <Text style={styles.inputLabel}>Name</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#808080"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

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
        <View style={styles.termsContainer}>
          <CustomCheckbox
            value={agreeTerms}
            onValueChange={(newValue) => setAgreeTerms(newValue)}
          />
          <Text style={styles.termsText}>I agree with <Text style={{ textDecorationLine: 'underline' }}>terms and conditions</Text></Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Already have an account?
          </Text>
          <TouchableOpacity style={styles.signUpBtn} onPress={handleSignIn}>
            <Text style={styles.signUpUnderline}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By login or sign up, you agree to our terms of use and privacy policy
        </Text>

        <View style={styles.bottomImageContainer}>
          <Image
            source={require('../assets/buttom-signup.png')}
            style={styles.bottomRightImage}
          />
        </View>

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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    marginBottom: 15,
    width: '100%',
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
  signUpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
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
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 200,
    height: 200,
    zIndex: -1,
  },
  bottomRightImage: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#94C7FF',
    borderRadius: 2,
  },
});

export default SignUpScreen;