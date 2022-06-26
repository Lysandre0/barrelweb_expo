import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { auth } from "../firebase";

export function MenuScreen() {
  if (auth.currentUser) {
    return (
      <LogoutScreen />
    );
  } else {
    return (
      <LoginScreen />
    );
  }
}

export function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account!</Text>
    </View>
  );
}

export function OrderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order!</Text>
    </View>
  );
}

export function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Message!</Text>
    </View>
  );
}

export function AssistanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Assistance!</Text>
    </View>
  );
}

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About!</Text>
    </View>
  );
}

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

