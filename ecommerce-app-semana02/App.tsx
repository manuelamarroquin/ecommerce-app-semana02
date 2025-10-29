import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
