import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartItem as CartItemType } from '../context/CartContext';

type Props = {
  item: CartItemType;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({ item, onUpdateQuantity, onRemove }: Props) {
  return (
    <View className="flex-row bg-white rounded-lg shadow-sm p-3 mb-3">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-md" />
      <View className="flex-1 ml-3 justify-between">
        <View>
          <Text className="text-base font-semibold text-gray-800" numberOfLines={1}>
            {item.name}
          </Text>
          <Text className="text-gray-500">${item.price.toFixed(2)}</Text>
        </View>

        <View className="flex-row items-center mt-2">
          <TouchableOpacity onPress={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <Ionicons name="remove-circle-outline" size={22} color="#3b82f6" />
          </TouchableOpacity>

          <Text className="mx-2 font-semibold">{item.quantity}</Text>

          <TouchableOpacity onPress={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <Ionicons name="add-circle-outline" size={22} color="#3b82f6" />
          </TouchableOpacity>

          <TouchableOpacity className="ml-auto" onPress={() => onRemove(item.id)}>
            <Ionicons name="trash-outline" size={22} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
