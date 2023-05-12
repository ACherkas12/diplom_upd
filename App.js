import { View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from './src/navigations/Navigator';

const Stack = createStackNavigator();

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Bold: require('./src/fonts/Montserrat-ExtraBold.otf'),
        Medium: require('./src/fonts/Montserrat-Medium.otf'),
        Regular: require('./src/fonts/Montserrat-Regular.otf'),
      });
      setIsFontLoaded(true);
    };

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  return (
    <NavigationContainer>
      {isFontLoaded ? (
        <View onLayout={onLayoutRootView}>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={StackNavigator} />
          </Stack.Navigator>
        </View>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
