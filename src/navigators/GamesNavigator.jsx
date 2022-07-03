import { createStackNavigator } from '@react-navigation/stack';
import GamesScreen from '../components/Games';
import DetailsGamesScreen from '../components/DetailsGames';

const Stack = createStackNavigator();

export function GamesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GamesScreen"
      screenOptions={() => ({
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#212121',
        headerStyle: { backgroundColor: '#FAFAFA' },
      })}>
      <Stack.Screen name="GamesScreen" component={GamesScreen} />
      <Stack.Screen name="DetailsGamesScreen" component={DetailsGamesScreen} />
    </Stack.Navigator>
  );
}