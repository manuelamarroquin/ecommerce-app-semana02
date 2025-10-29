import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart, CartItem } from '../../context/CartContext';
import CartItemComponent from '../../components/CartItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<CartStackParamList, 'CartScreen'>;

export default function CartScreen({ navigation }: Props) {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <View className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-3">My Cart</Text>

      {items.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500 mb-4">Your cart is empty 🛍️</Text>
          <TouchableOpacity
            className="bg-primary px-4 py-2 rounded-lg"
            onPress={() => navigation.navigate('HomeScreen' as never)}
          >
            <Text className="text-white font-semibold">Go Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id} // id es string
            renderItem={({ item }: { item: CartItem }) => (
              <CartItemComponent
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* Totales */}
          <View className="p-4 bg-white rounded-lg shadow-sm mt-3">
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Subtotal</Text>
              <Text className="font-semibold">${total.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Discount</Text>
              <Text className="font-semibold text-green-600">
                - ${(total * 0.05).toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between border-t border-gray-200 pt-2">
              <Text className="font-bold text-gray-800">Total</Text>
              <Text className="font-bold text-primary">${(total * 0.95).toFixed(2)}</Text>
            </View>
          </View>

          <TouchableOpacity
            className="bg-primary p-4 rounded-lg mt-4"
            onPress={() => navigation.navigate('ShippingScreen')}
          >
            <Text className="text-white text-center font-semibold">
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
