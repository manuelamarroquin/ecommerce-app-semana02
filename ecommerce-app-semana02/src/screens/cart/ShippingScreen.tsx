import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<CartStackParamList, 'ShippingScreen'>;

export default function ShippingScreen({ navigation }: Props) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (Object.values(form).some((f) => f.trim() === '')) {
      Alert.alert('Incomplete form', 'Please fill all the required fields.');
      return;
    }
    navigation.navigate('PaymentScreen');
  };

  return (
    <ScrollView className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-3">Shipping Address</Text>

      {Object.entries(form).map(([key, value]) => (
        <View key={key} className="mb-3">
          <Text className="text-gray-700 mb-1 capitalize">{key}</Text>
          <TextInput
            value={value}
            onChangeText={(t) => handleChange(key, t)}
            placeholder={`Enter your ${key}`}
            className="bg-white p-3 rounded-lg border border-gray-200"
          />
        </View>
      ))}

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg mt-4"
        onPress={handleNext}
      >
        <Text className="text-white text-center font-semibold">Continue to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
