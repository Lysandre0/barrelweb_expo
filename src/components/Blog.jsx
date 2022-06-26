import { View, Text, StyleSheet } from 'react-native';

function BlogScreen() {
  return (
    <View style={styles.container}>
      <Text>Blog!</Text>
    </View>
  );
}

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
