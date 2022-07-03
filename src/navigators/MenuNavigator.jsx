import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen, OrderScreen, MessageScreen, AssistanceScreen, AboutScreen } from '../components/Menu';
import LogInScreen from '../components/LogIn';
import LogOutScreen from '../components/LogOut';
import RegisterScreen from '../components/Register';

const Stack = createStackNavigator();

export function MenuNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        initalRouteName: 'MenuScreen',
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#212121',
        headerStyle: { backgroundColor: '#FAFAFA' },
      })}>
      <Stack.Screen name="LoginScreen" component={LogInScreen} options={{ title: 'Connexion' }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Inscription' }} />
      <Stack.Screen name="LogOutScreen" component={LogOutScreen} options={{ title: 'Log Out' }} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Compte' }} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ title: 'Commandes' }} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} options={{ title: 'Messages' }} />
      <Stack.Screen name="AssistanceScreen" component={AssistanceScreen} options={{ title: 'Assistance' }} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'A propos' }} />
    </Stack.Navigator>
  );
}