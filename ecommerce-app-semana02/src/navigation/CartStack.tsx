import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import ShippingScreen from '../screens/cart/ShippingScreen';
import PaymentScreen from '../screens/cart/PaymentScreen';
import ConfirmationScreen from '../screens/cart/ConfirmationScreen';

export type CartStackParamList = {
  CartScreen: undefined;
  ShippingScreen: undefined;
  PaymentScreen: undefined;
  ConfirmationScreen: undefined;
};

const Stack = createNativeStackNavigator<CartStackParamList>();

export default function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'My Cart' }} />
      <Stack.Screen name="ShippingScreen" component={ShippingScreen} options={{ title: 'Shipping Info' }} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: 'Payment' }} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{ title: 'Order Confirmed' }} />
    </Stack.Navigator>
  );
}
