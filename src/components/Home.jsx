import { View, Text, StyleSheet } from 'react-native';
import { auth } from '../firebase';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Mail : {auth.currentUser?.email}</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
