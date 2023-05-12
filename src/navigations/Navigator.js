import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import FrstJSBasics from '../screens/FrstJSBasics'

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cources" component={Cources} options={{ headerShown: false }} />
        <Stack.Screen name="Xd" component={Xd} options={{ headerShown: false }} />
        <Stack.Screen name="FrstJSBasics" component={FrstJSBasics} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  };
