import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import { REVIEWS } from '../../data/reviews';
import ReviewCard from '../../components/ReviewCard';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<HomeStackParamList, 'ReviewsScreen'>;

export default function ReviewsScreen({ route }: Props) {
  const { productId } = route.params;
  const [sortBy, setSortBy] = useState<'recent' | 'best'>('recent');

  const productReviews = useMemo(() => {
    let r = REVIEWS.filter((rev) => rev.productId === productId);
    if (sortBy === 'best') {
      r = [...r].sort((a, b) => b.rating - a.rating);
    }
    return r;
  }, [productId, sortBy]);

  const averageRating =
    productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length || 0;

  return (
    <View className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-2">Reviews</Text>
      <Text className="text-gray-600 mb-3">
        ⭐ {averageRating.toFixed(1)} average from {productReviews.length} reviews
      </Text>

      {/* Ordenar por */}
      <View className="flex-row justify-end mb-3">
        <TouchableOpacity
          className={`px-3 py-1 rounded-full mr-2 ${
            sortBy === 'recent' ? 'bg-primary' : 'bg-gray-200'
          }`}
          onPress={() => setSortBy('recent')}
        >
          <Text
            className={`${
              sortBy === 'recent' ? 'text-white' : 'text-gray-700'
            } text-sm font-semibold`}
          >
            Most Recent
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-3 py-1 rounded-full ${
            sortBy === 'best' ? 'bg-primary' : 'bg-gray-200'
          }`}
          onPress={() => setSortBy('best')}
        >
          <Text
            className={`${
              sortBy === 'best' ? 'text-white' : 'text-gray-700'
            } text-sm font-semibold`}
          >
            Best Rated
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productReviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ReviewCard review={item} />}
        ListEmptyComponent={<Text className="text-gray-500 mt-4">No reviews yet.</Text>}
      />
    </View>
  );
}
