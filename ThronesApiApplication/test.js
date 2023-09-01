import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useIsFocused } from "@react-navigation/native"; // Add import for useIsFocused
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };
  const handleSignUp = () => {
    navigation.navigate('Register');
    setPassword('');
    setUsername('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My APP</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="white" 
        value={username}
        onChangeText={text => setUsername(text)}
        style={[styles.input, { color: 'white' }]}
      />
      <View style={styles.passwordInput}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="white" 
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!showPassword}
          style={[styles.input, { color: 'white' }]}
        />
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
  <Text style={styles.bottomText}>
    Don't have an account? &nbsp;
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Register");
        setPassword("");
        setEmail("");
      }}
    >
      <Text style={styles.signUpText}>Sign up</Text>
    </TouchableOpacity>
  </Text>

</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#292828',
  },
  header: {
    fontSize: 24,
    marginBottom: 24,
    color:'white',
    fontWeight:'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop:20,
    backgroundColor: '#4D4D4D',
  },
  passwordInput: {
    position: 'relative',
    width: '100%',
    marginBottom: 16,
    color:'white',
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
    marginTop:20,
  },
  loginButton: {
    backgroundColor: '#9e8b62',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
  },
  signUpText: {
    fontWeight: 'bold',
    color: 'rgb(158, 139, 98)',
    fontSize:16,
  },
  forgotPasswordText:{
    left:100,
    color:'white',
  }

});

export default Login;
