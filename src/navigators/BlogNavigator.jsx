import { createStackNavigator } from '@react-navigation/stack';
import BlogScreen from '../components/Blog';
import ArticleScreen from '../components/Article';

const Stack = createStackNavigator();

export function BlogNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BlogScreen"
      screenOptions={() => ({
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#212121',
        headerStyle: { backgroundColor: '#FAFAFA' },
      })}>
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
    </Stack.Navigator>
  );
}