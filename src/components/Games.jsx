import { View, Text, StyleSheet } from 'react-native';

function GamesScreen() {
  return (
    <View style={styles.container}>
      <Text>Games!</Text>
    </View>
  );
}

export default GamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
