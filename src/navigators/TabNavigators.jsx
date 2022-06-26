import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home';
import GamesScreen from '../components/Games';
import BlogScreen from '../components/Blog';
import { MenuNavigator } from './MenuNavigator';
import { SVGHome, SVGGames, SVGBlog, SVGMenu } from '../components/SVGIcons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#212121',
        tabBarStyle: { backgroundColor: '#FAFAFA' },
        headerStyle: { backgroundColor: '#FAFAFA' },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SVGHome width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamesScreen}
        options={{
          tabBarLabel: 'Games',
          tabBarIcon: ({ color, size }) => (
            <SVGGames width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color, size }) => (
            <SVGBlog width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <SVGMenu width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator >
  );
}

export default TabNavigator;