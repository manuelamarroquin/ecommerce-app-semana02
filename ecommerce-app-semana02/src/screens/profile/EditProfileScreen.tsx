import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';
import { CURRENT_USER } from '../../data/userData';

type Props = NativeStackScreenProps<ProfileStackParamList, 'EditProfileScreen'>;

export default function EditProfileScreen({ navigation }: Props) {
  const [form, setForm] = useState({
    name: CURRENT_USER.name,
    email: CURRENT_USER.email,
    phone: CURRENT_USER.phone,
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (Object.values(form).some((v) => v.trim() === '')) {
      Alert.alert('Incomplete', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Profile Updated', 'Your changes have been saved successfully.');
    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-light p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</Text>

      {Object.entries(form).map(([key, value]) => (
        <View key={key} className="mb-3">
          <Text className="text-gray-700 mb-1 capitalize">{key}</Text>
          <TextInput
            value={value}
            onChangeText={(t) => handleChange(key, t)}
            placeholder={`Enter ${key}`}
            className="bg-white p-3 rounded-lg border border-gray-200"
          />
        </View>
      ))}

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg mt-4"
        onPress={handleSave}
      >
        <Text className="text-white text-center font-semibold">Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
