import { StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export function GamesScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=8B7BCDC2" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=500B67FB" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=A89D0DE6" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=B0E33EF4" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=7F5AE56A" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=BDC01094" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card style={styles.card}>
        <Card.Image style={styles.image} source={{ uri: "https://api.lorem.space/image/game?w=150&h=220&hash=2D297A22" }} />
        <Button onPress={() => navigation.navigate("DetailsGamesScreen")} style={styles.button} title='OPEN' />
      </Card>
    </ScrollView>
  );
}

export default GamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {

    marginBottom: 20,
  },
  card: {
    margin: 10,
  }
  ,
  button: {
    margin: 10,
  }

});
