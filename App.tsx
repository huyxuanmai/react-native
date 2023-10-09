import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      </View>

      <Text style={styles.title}>Instagram</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Tên người dùng" />
        <TextInput style={styles.input} placeholder="Mật khẩu" />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#3897f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    borderColor: '#3897f0',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signupText: {
    color: '#3897f0',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;