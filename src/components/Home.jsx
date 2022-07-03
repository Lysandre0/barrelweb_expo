import { View, Text, StyleSheet, Image } from 'react-native';
import { auth } from '../firebase';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/barrelweb-expo.appspot.com/o/Asset%201.png?alt=media&token=c2e23c6b-4471-4e50-a172-9d4348555aef" }} />
      <Text style={styles.text}>Bienvenue sur notre application.</Text>
      <Text style={styles.text}>Vous pourrez consulter les jeux et les actualités du studio Time Rocket.</Text>
      <Text style={styles.text}>Bonne navigation à vous visiteur !</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c4dff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },

});
