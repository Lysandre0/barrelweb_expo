import { View, Text, StyleSheet, Image } from 'react-native';
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
      <Image style={styles.image} source={{ uri: "http://assets.stickpng.com/images/5b43bc40e99939b4572e32b7.png" }} />
      <Text style={styles.text}>EN CONSTRUCTION</Text>
    </View>
  );
}

export function OrderScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "http://assets.stickpng.com/images/5b43bc40e99939b4572e32b7.png" }} />
      <Text style={styles.text}>EN CONSTRUCTION</Text>
    </View>
  );
}

export function MessageScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "http://assets.stickpng.com/images/5b43bc40e99939b4572e32b7.png" }} />
      <Text style={styles.text}>EN CONSTRUCTION</Text>
    </View>
  );
}

export function AssistanceScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "http://assets.stickpng.com/images/5b43bc40e99939b4572e32b7.png" }} />
      <Text style={styles.text}>EN CONSTRUCTION</Text>
    </View>
  );
}

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "http://assets.stickpng.com/images/5b43bc40e99939b4572e32b7.png" }} />
      <Text style={styles.text}>EN CONSTRUCTION</Text>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  text: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
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

