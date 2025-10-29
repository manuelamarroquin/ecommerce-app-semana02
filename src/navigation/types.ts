// src/navigation/types.ts

/**
 * Tipos de navegación para toda la app
 *
 * Estructura:
 * - DrawerParamList: Navegador principal (Drawer)
 * - TabParamList: Tabs dentro del Drawer
 * - HomeStackParamList: Stack de Home
 * - CartStackParamList: Stack de Cart
 * - ProfileStackParamList: Stack de Profile
 */

// ============================================
// Drawer Navigator
// ============================================

export type DrawerParamList = {
  MainTabs: undefined
  CategoryElectronics: undefined
  CategoryClothing: undefined
  CategoryBooks: undefined
  CategorySports: undefined
  CategoryHomeGarden: undefined
}

// ============================================
// Tab Navigator
// ============================================

export type TabParamList = {
  HomeTabScreen: undefined
  CartTabScreen: undefined
  ProfileTabScreen: undefined
}

// ============================================
// Home Stack
// ============================================

export type HomeStackParamList = {
  HomeScreen: undefined
  ProductDetailScreen: { productId: number }
  ReviewsScreen: { productId: number }
}

// ============================================
// Cart Stack
// ============================================

// src/navigation/types.ts
export type CartStackParamList = {
  CartScreen: undefined;
  ShippingScreen: undefined;
  PaymentScreen: undefined;
  ConfirmationScreen: undefined;
};


// ============================================
// Profile Stack
// ============================================

export type ProfileStackParamList = {
  ProfileScreen: undefined
  EditProfileScreen: undefined
  OrdersScreen: undefined
  SettingsScreen: undefined
}

