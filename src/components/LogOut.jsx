import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

function LogoutScreen() {
  const navigation = useNavigation();
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        auth.currentUser == null;
        navigation.replace('LoginScreen')
      })
      .catch(error => console.log(error.message))
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(AccountScreen)} style={styles.pressable}>
        <Text style={styles.text}>Compte</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(OrderScreen)} style={styles.pressable}>
        <Text style={styles.text}>Commandes</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(MessageScreen)} style={styles.pressable}>
        <Text style={styles.text}>Messages</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(AssistanceScreen)} style={styles.pressable}>
        <Text style={styles.text}>Assistance</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(AboutScreen)} style={styles.pressable}>
        <Text style={styles.text}>A propos</Text>
      </Pressable>
      <Pressable onPress={handleLogOut} style={styles.pressable}>
        <Text style={styles.text}>Log Out</Text>
      </Pressable>
    </View>
  );
}

export default LogoutScreen;

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
});