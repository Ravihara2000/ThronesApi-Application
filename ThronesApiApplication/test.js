import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My APP</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="white" 
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <View style={styles.passwordInput}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="white" 
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  },
  passwordInput: {
    position: 'relative',
    width: '100%',
    marginBottom: 16,
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
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
    color: 'white',
    fontSize: 16,
  },
});

export default Login;
