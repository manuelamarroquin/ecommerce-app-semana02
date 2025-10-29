import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<CartStackParamList, 'ConfirmationScreen'>;

export default function ConfirmationScreen({ navigation }: Props) {
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <View className="flex-1 bg-light justify-center items-center p-6">
      <Ionicons name="checkmark-circle-outline" size={100} color="#10b981" />
      <Text className="text-2xl font-bold text-gray-800 mt-4 mb-2">Order Confirmed!</Text>
      <Text className="text-gray-600 mb-6">Your order #{orderId} has been placed successfully.</Text>

      <TouchableOpacity
        className="bg-primary px-6 py-3 rounded-lg mb-3"
        onPress={() => navigation.navigate('HomeScreen' as never)}
      >
        <Text className="text-white font-semibold">Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-gray-100 px-6 py-3 rounded-lg"
        onPress={() => navigation.navigate('ProfileStack' as never)}
      >
        <Text className="text-gray-800 font-semibold">View My Orders</Text>
      </TouchableOpacity>
    </View>
  );
}
