import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import ProductCard from '../../components/ProductCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-light px-3">

      <View className="mt-4 mb-3">
        <Text className="text-2xl font-bold text-gray-800">Welcomeeee </Text>
        <Text className="text-gray-500">Discover our latest products</Text>
      </View>

      {/* Categorías rápidas */}
      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="mr-3 items-center"
            onPress={() => navigation.navigate('HomeScreen')} // 
          >
            <View className="bg-white p-3 rounded-full shadow-sm mb-1">
              <Image
                source={{ uri: `https://via.placeholder.com/60?text=${item.name}` }}
                className="w-12 h-12 rounded-full"
              />
            </View>
            <Text className="text-xs text-gray-700">{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Productos destacados */}
      <Text className="text-lg font-semibold text-gray-800 mt-4 mb-2">Featured Products</Text>
      <FlatList
        data={PRODUCTS.slice(0, 10)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetailScreen', { productId: item.id })}
          />
        )}
      />
    </View>
  );
}
