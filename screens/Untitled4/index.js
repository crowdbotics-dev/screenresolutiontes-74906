import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {// handle login logic here
  };

  return <ImageBackground source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
export default LoginScreen;