import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { orders } from '../../data/orders';
import { formatDate, formatPrice, getOrderStatusBadge } from '../../utils/formatters';

export default function OrdersScreen() {
  return (
    <View className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const badge = getOrderStatusBadge(item.status);

          return (
            <View className="bg-white p-4 rounded-lg mb-3 shadow-sm">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="font-semibold text-gray-800">
                  Order #{item.id}
                </Text>
                <View
                  style={{
                    backgroundColor: badge.bgColor,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 12,
                  }}
                >
                  <Text style={{ color: badge.color, fontWeight: '600', fontSize: 12 }}>
                    {badge.text}
                  </Text>
                </View>
              </View>

              <Text className="text-gray-600 text-sm mb-1">
                Date: {formatDate(item.date)}
              </Text>

              <Text className="text-gray-800 font-semibold">
                Total: {formatPrice(item.total)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
