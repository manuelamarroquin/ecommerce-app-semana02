import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Review } from '../types';

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <View className="bg-white rounded-lg shadow-sm p-3 mb-3">
      <View className="flex-row items-center mb-2">
        <Image
          source={{ uri: `https://i.pravatar.cc/100?u=${review.userName}` }}
          className="w-8 h-8 rounded-full mr-2"
        />
        <Text className="font-semibold text-gray-800">{review.userName}</Text>
      </View>

      <View className="flex-row mb-1">
        {[...Array(5)].map((_, i) => (
          <Ionicons
            key={i}
            name={i < review.rating ? 'star' : 'star-outline'}
            size={16}
            color="#f59e0b"
          />
        ))}
      </View>

      <Text className="text-gray-600 text-sm mb-2">{review.comment}</Text>

      <TouchableOpacity className="flex-row items-center">
        <Ionicons name="thumbs-up-outline" size={16} color="#3b82f6" />
        <Text className="ml-1 text-blue-500 text-sm">Helpful</Text>
      </TouchableOpacity>
    </View>
  );
}
