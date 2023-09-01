import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useIsFocused } from "@react-navigation/native"; // Add import for useIsFocused
import { auth, firestore } from './firebase'; // Import the firestore module if you're using Firestore

const Register = () => {
    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleRepasswordChange = (value) => {
    setRepassword(value);
  };
  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email ");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!name) {
      alert("Please enter your Username");
      return;
    }
    if (!password) {
      alert("Please enter your Password");
      return;
    }
    if (!validatePassword(password)) {
      alert(
        "Please enter a password that is at least 8 characters long and contains at least one letter and one number"
      );
      return;
    }
    if (!repassword) {
      alert("Please re-enter your Password");
      return;
    }
    if (password !== repassword) {
      alert("Passwords do not match. Please try again");
      setRepassword("");
    }
    if (password === repassword) {
      setEmail("");
      setName("");
      setPassword("");
      setRepassword("");
      navigation.navigate("Welcome");
      _submitData();
    }
  };

  const _submitData = async () => {
    try {
      // Create a new user account with email and password
      await auth.createUserWithEmailAndPassword(email, password);
  
      // Get the user ID of the newly created user
      const user = auth.currentUser;
  
      // Add additional user data to a Firestore document (if you're using Firestore)
      if (user) {
        await firestore.collection('users').doc(user.uid).set({
          name: name,
          email: email,
          // Add more user data as needed
        });
      }
  
      // Navigate to the desired screen after successful registration
      navigation.navigate('Welcome');
  
      // Clear form fields
      setEmail('');
      setName('');
      setPassword('');
      setRepassword('');
    } catch (error) {
      // Handle registration errors
      alert('Registration failed. Please try again.');
      console.error(error);
    }
  };
  


  return (
    <View style={styles.container}>
      <Text style={styles.header}>My APP</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="white" 
        value={name}
        onChangeText={handleNameChange}
        style={[styles.input, { color: 'white' }]}
      />
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="white" 
        value={email}
        onChangeText={handleEmailChange}
        style={[styles.input, { color: 'white' }]}
      />
      <View style={styles.passwordInput}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="white" 
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={!showPassword}
          style={[styles.input, { color: 'white' }]}
        />
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="white" 
          value={repassword}
          onChangeText={handleRepasswordChange}
          secureTextEntry={!showPassword}
          style={[styles.input, { color: 'white' }]}
        />
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
  <Text style={styles.bottomText}>
    Have an account? &nbsp;
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Login");
      }}
    >
      <Text style={styles.signUpText}>Sign in</Text>
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

export default Register;
