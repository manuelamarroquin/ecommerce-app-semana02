import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function CategoryScreen() {
  const route = useRoute();
  const category = route.name.replace('Category', '');

  const filtered = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <View className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold mb-4 text-gray-800">
        {category} Products
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} onPress={function (): void {
            throw new Error('Function not implemented.');
        } } />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
