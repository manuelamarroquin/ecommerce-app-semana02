import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import OrdersScreen from '../screens/profile/OrdersScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  OrdersScreen: undefined;
  SettingsScreen: undefined;
};
const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'My Profile' }} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} options={{ title: 'My Orders' }} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}
