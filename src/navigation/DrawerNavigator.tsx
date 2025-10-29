import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CategoryScreen from '../screens/category/CategoryScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#3b82f6',
      }}
    >
      <Drawer.Screen name="MainTabs" component={TabNavigator} options={{ title: 'Inicio' }} />
      <Drawer.Screen name="CategoryElectronics" component={CategoryScreen} options={{ title: 'Electronics' }} />
      <Drawer.Screen name="CategoryClothing" component={CategoryScreen} options={{ title: 'Clothing' }} />
      <Drawer.Screen name="CategoryBooks" component={CategoryScreen} options={{ title: 'Books' }} />
      <Drawer.Screen name="CategorySports" component={CategoryScreen} options={{ title: 'Sports' }} />
      <Drawer.Screen name="CategoryHomeGarden" component={CategoryScreen} options={{ title: 'Home & Garden' }} />
    </Drawer.Navigator>
  );
}
