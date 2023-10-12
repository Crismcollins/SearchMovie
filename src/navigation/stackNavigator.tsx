import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import Detail from '../screens/Detail';
import { screenTabNavigatorOptions } from '../styles/navigation/stacksStyle';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={screenTabNavigatorOptions}/>
        <Stack.Screen name="Detail" component={Detail} options={screenTabNavigatorOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;