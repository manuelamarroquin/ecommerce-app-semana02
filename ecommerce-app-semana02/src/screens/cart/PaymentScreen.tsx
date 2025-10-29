import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartStackParamList } from '../../navigation/types';
import { useCart } from '../../context/CartContext';

type Props = NativeStackScreenProps<CartStackParamList, 'PaymentScreen'>;

const methods = [
  { id: 'card', name: 'Credit / Debit Card', icon: 'card-outline' },
  { id: 'paypal', name: 'PayPal', icon: 'logo-paypal' },
  { id: 'cash', name: 'Cash on Delivery', icon: 'cash-outline' },
];

export default function PaymentScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string>('card');
  const { clearCart } = useCart();

  const handleConfirm = () => {
    clearCart();
    Alert.alert('Order Confirmed', 'Your order has been placed successfully!');
    navigation.navigate('ConfirmationScreen');
  };

  return (
    <View className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-3">Payment Method</Text>

      {methods.map((m) => (
        <TouchableOpacity
          key={m.id}
          className={`flex-row items-center p-4 rounded-lg mb-2 border ${
            selected === m.id ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white'
          }`}
          onPress={() => setSelected(m.id)}
        >
          <Ionicons name={m.icon as any} size={24} color={selected === m.id ? '#3b82f6' : '#6b7280'} />
          <Text
            className={`ml-3 text-base ${
              selected === m.id ? 'text-primary font-semibold' : 'text-gray-700'
            }`}
          >
            {m.name}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg mt-6"
        onPress={handleConfirm}
      >
        <Text className="text-white text-center font-semibold">Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}
