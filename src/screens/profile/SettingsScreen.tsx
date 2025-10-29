import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('en'); // 'en' o 'es'

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Text style={styles.header}>Configuración</Text>

      {/* Dark Mode */}
      <View style={styles.row}>
        <Text style={styles.label}>Modo oscuro</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      {/* Notificaciones */}
      <View style={styles.row}>
        <Text style={styles.label}>Notificaciones</Text>
        <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
      </View>

      {/* Idioma */}
      <View style={styles.row}>
        <Text style={styles.label}>Idioma</Text>
        <Switch
          value={language === 'es'}
          onValueChange={(val) => setLanguage(val ? 'es' : 'en')}
        />
        <Text style={styles.smallText}>{language === 'es' ? 'Español' : 'Inglés'}</Text>
      </View>

      {/* Botones de enlace */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacidad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Términos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ayuda</Text>
      </TouchableOpacity>

      {/* Versión de la app */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Versión 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: { fontSize: 16 },
  smallText: { fontSize: 14, color: '#555', marginLeft: 10 },
  button: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttonText: { fontSize: 16 },
  versionContainer: { marginTop: 30, alignItems: 'center' },
  versionText: { fontSize: 14, color: '#888' },
});

export default SettingsScreen;
