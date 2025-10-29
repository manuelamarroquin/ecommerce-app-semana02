import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';
import { CURRENT_USER } from '../../data/userData';

type Props = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-light p-5">
      {/* Header */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: CURRENT_USER.avatar }}
          className="w-24 h-24 rounded-full mb-3"
        />
        <Text className="text-xl font-bold text-gray-800">{CURRENT_USER.name}</Text>
        <Text className="text-gray-500">{CURRENT_USER.email}</Text>
        <Text className="text-gray-500">{CURRENT_USER.phone}</Text>
      </View>

      {/* Stats */}
      <View className="flex-row justify-around bg-white p-4 rounded-lg mb-5 shadow-sm">
        <View className="items-center">
          <Text className="text-lg font-bold text-primary">0</Text>
          <Text className="text-gray-600 text-sm">Orders</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold text-primary">0</Text>
          <Text className="text-gray-600 text-sm">Favorites</Text>
        </View>
      </View>

      {/* Options */}
      <View className="bg-white rounded-lg p-3 shadow-sm">
        {[
          { title: 'Edit Profile', icon: 'create-outline', screen: 'EditProfileScreen' },
          { title: 'My Orders', icon: 'receipt-outline', screen: 'OrdersScreen' },
          { title: 'Settings', icon: 'settings-outline', screen: 'SettingsScreen' },
        ].map((opt) => (
          <TouchableOpacity
            key={opt.title}
            className="flex-row items-center py-3 border-b border-gray-100"
            onPress={() => navigation.navigate(opt.screen as never)}
          >
            <Ionicons name={opt.icon as any} size={22} color="#3b82f6" />
            <Text className="ml-3 text-gray-800 text-base">{opt.title}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity className="flex-row items-center py-3 mt-2">
          <Ionicons name="log-out-outline" size={22} color="#ef4444" />
          <Text className="ml-3 text-red-500 font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
