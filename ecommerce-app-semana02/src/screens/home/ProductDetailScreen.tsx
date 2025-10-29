import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<HomeStackParamList, 'ProductDetailScreen'>;

export default function ProductDetailScreen({ route, navigation }: Props) {
  const { productId } = route.params;
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">Product not found</Text>
      </View>
    );
  }

  const handleAdd = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    });
    Alert.alert('Added to Cart', `${product.name} has been added to your cart!`);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <Image
        source={{ uri: product.image }}
        className="w-full h-72"
        resizeMode="cover"
      />

      <View className="p-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">{product.name}</Text>
          <View className="bg-green-100 px-3 py-1 rounded-md">
            <Text className="text-green-600 font-semibold">In Stock</Text>
          </View>
        </View>

        <Text className="text-xl text-primary font-bold mt-2">${product.price.toFixed(2)}</Text>

        {product.price > 100 && (
          <View className="bg-yellow-100 px-2 py-1 rounded-md mt-1 w-20">
            <Text className="text-yellow-600 text-xs font-semibold">-10%</Text>
          </View>
        )}

        <Text className="text-gray-600 mt-3 leading-6">{product.description}</Text>

        <View className="mt-6 space-y-3">
          <TouchableOpacity
            className="bg-primary p-3 rounded-lg flex-row items-center justify-center"
            onPress={handleAdd}
          >
            <Ionicons name="cart-outline" size={20} color="white" />
            <Text className="text-white font-semibold ml-2">Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-100 p-3 rounded-lg flex-row items-center justify-center"
            onPress={() => navigation.navigate('ReviewsScreen', { productId })}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#3b82f6" />
            <Text className="text-blue-600 font-semibold ml-2">View Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
