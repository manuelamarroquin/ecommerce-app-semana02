// src/components/ProductCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../types';
import { useCart, CartItem } from '../context/CartContext';

type Props = {
  product: Product;
  onPress: () => void;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id.toString(), 
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1
    };
    addToCart(cartItem);
  };

  return (
    <View className="bg-white rounded-lg shadow p-3 mb-4">
      <Image source={{ uri: product.image }} className="w-full h-40 rounded-md" />
      <Text className="text-lg font-semibold mt-2">{product.name}</Text>
      <Text className="text-gray-500">${product.price.toFixed(2)}</Text>

      <TouchableOpacity
        className="bg-primary p-2 rounded-lg mt-2"
        onPress={handleAddToCart}
      >
        <Text className="text-white text-center font-semibold">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
