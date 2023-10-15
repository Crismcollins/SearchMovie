import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import Detail from '../screens/Detail';
import { screenTabNavigatorOptions } from '../styles/navigation/stacksStyle';
import { ScreensStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<ScreensStackParamList>();

const StackNavigator = () => {

  const linking = {
    prefixes: ['searchmovies://'],
    config: {
      screens: {
        TabNavigator: {
          screens: {
            Search: {
              path: 'Search',
            },
            Favorites: {
              path: 'Favorites'
            },
            Shared: {
              path: 'Shared'
            }
          }
        },
        Detail:{ 
          path: 'Detail/:imdbID'
        }
      }
    }
  }

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