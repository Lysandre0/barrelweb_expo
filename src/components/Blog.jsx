import { Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

function BlogScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button onPress={() => navigation.navigate("ArticleScreen")} style={styles.button} title='OPEN' />
      </Card>
    </ScrollView>
  );
}

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    marginBottom: 20,
  },
});
