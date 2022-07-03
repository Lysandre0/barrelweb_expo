import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('LoginScreen');
      }
    })
    return (
      unsubscribe
    );
  }, []);

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => setErrorMessage(error.message));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none" />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry />
      <Text style={styles.text}>{errorMessage}</Text>
      <Pressable onPress={handleRegister} style={styles.pressableRegister}>
        <Text style={styles.textRegister}>S'INSCRIRE</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("LoginScreen")} style={styles.pressable}>
        <Text style={styles.text}>Connexion</Text>
      </Pressable>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  textInput: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    marginTop: 20,
  },
  pressable: {
    width: 200,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
  },
  pressableLogIn: {
    width: 200,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
    backgroundColor: '#000',
    color: '#FFF',
  },
  pressableRegister: {
    width: 200,
    height: 50,
    backgroundColor: '#2089dc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
  },
  textRegister: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});