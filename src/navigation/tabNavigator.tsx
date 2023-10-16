import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';
import Shared from '../screens/Shared';
import { 
  searchTabOptions, 
  favoritesTabOptions, 
  sharedTabOptions,
  tabNavigatorStyle } from '../styles/navigation/tabsStyle';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Search' screenOptions={tabNavigatorStyle}>
      <Tab.Screen name="Favorites" component={Favorites} options={favoritesTabOptions}/>
      <Tab.Screen name="Search" component={Search} options={ searchTabOptions }/>
      <Tab.Screen name="Shared" component={Shared} options={sharedTabOptions}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;