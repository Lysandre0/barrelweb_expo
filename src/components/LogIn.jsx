import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

function LogInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('LogOutScreen');
      }
    })
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('registered user: ', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Text style={styles.text}>{errorMessage}</Text>
      <Pressable onPress={handleLogin} style={styles.pressableLogIn}>
        <Text style={styles.textLogIn}>SE CONNECTER</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("RegisterScreen")} style={styles.pressable}>
        <Text style={styles.text}>Inscription</Text>
      </Pressable>
    </View>
  );
}

export default LogInScreen;

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
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
  },
  pressableLogIn: {
    width: 200,
    height: 50,
    backgroundColor: '#2089dc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
  },
  textLogIn: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});