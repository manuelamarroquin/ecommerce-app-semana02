import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CURRENT_USER } from '../data/userData';
import { CATEGORIES } from '../data/categories';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Header */}
      <View className="p-4 bg-primary mb-3">
        <Image source={{ uri: CURRENT_USER.avatar }} className="w-16 h-16 rounded-full mb-2" />
        <Text className="text-white text-lg font-bold">{CURRENT_USER.name}</Text>
        <Text className="text-white text-sm">{CURRENT_USER.email}</Text>
      </View>

      {/* Categorías */}
      <View className="flex-1">
        {CATEGORIES.map((cat: { id: React.Key | null | undefined; name: string | ((props: { focused: boolean; color: string; }) => React.ReactNode); icon: any; }) => (
          <DrawerItem
            key={cat.id}
            label={cat.name}
            icon={({ color, size }) => <Ionicons name={cat.icon as any} size={size} color={color} />}
            onPress={() => {
              props.navigation.navigate(cat.name as never);
              props.navigation.closeDrawer();
            }}
          />
        ))}
      </View>

      {/* Footer */}
      <View className="p-4 border-t border-gray-200">
        <Text className="text-gray-500 text-xs text-center">E-Commerce App v1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}
