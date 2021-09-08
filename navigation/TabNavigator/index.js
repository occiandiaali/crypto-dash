import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../views/Dashboard';
import Notification from '../../views/Notification';
import Profile from '../../views/Profile';
import Search from '../../views/Search';
import Currency from '../../views/Currency';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'circle-slice-2';
      break;
    case 'Currency':
      iconName = 'currency-usd-circle-outline';
      break;
    case 'Search':
      iconName = 'magnify';
      break;
    case 'Notification':
      iconName = 'bell-outline';
      break;
    case 'Profile':
      iconName = 'account-outline';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={24} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Currency"
        component={Currency}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
