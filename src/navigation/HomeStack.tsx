import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductDetailScreen from '../screens/home/ProductDetailScreen';
import ReviewsScreen from '../screens/home/ReviewsScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductDetailScreen: { productId: number };
  ReviewsScreen: { productId: number };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
      <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} options={{ title: 'Reviews' }} />
    </Stack.Navigator>
  );
}
