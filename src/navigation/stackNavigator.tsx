import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import Detail from '../screens/Detail';
import { screenTabNavigatorOptions } from '../styles/navigation/stacksStyle';
import { ScreensStackParamList } from '../types/types';
import { linking } from './deeplinks/config';
const Stack = createNativeStackNavigator<ScreensStackParamList>();

const StackNavigator = () => {

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={screenTabNavigatorOptions}/>
        <Stack.Screen name="Detail" component={Detail} options={screenTabNavigatorOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;