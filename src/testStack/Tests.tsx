import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/settings/Settings';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}