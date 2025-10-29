# 🛍️ E-Commerce App – Proyecto Integrador

Aplicación móvil de comercio electrónico desarrollada con **React Native y Expo**.  
Su objetivo es permitir la navegación por productos, ver detalles y gestionar elementos del carrito.

---

## 🚀 Tecnologías Utilizadas


| React Native
| Expo 
| React Navigation 

---

## 📱 Características Principales

Pantallas principales del flujo de compra  
Listado de productos  
Pantalla de detalle del producto  
Carrito de compras  
Navegación con **Stack + Tab + Drawer**  

---

## 🧩 Estructura del Proyecto

ECOMMERCE-APP-SEMANA02
│
│
│
├── components/           # Componentes reutilizables UI
│   ├── CartItem.tsx      # Componente del item en carrito
│   ├── CustomDrawer.tsx  # Drawer personalizado
│   ├── ProductCard.tsx   # Tarjeta de producto
│   └── ReviewCard.tsx    # Tarjeta de reseña
│
│
├── node_modules/         # Dependencias del proyecto
│
├── scripts/              # Scripts útiles del proyecto
│
├── src/                  # Código principal del proyecto
│   │
│   ├── components/       # Componentes UI dentro de src
│   │
│   ├── context/          # Context API – Estados globales
│   │   └── CartContext.tsx
│   │
│   ├── data/             # Datos mock (productos, categorías, etc.)
│   │
│   ├── navigation/       # Sistema de navegación con Stack/Tab/Drawer
│   │   ├── DrawerNavigator.tsx # Drawer principal
│   │   ├── TabNavigator.tsx    # Tabs inferior
│   │   ├── ProfileStack.tsx    # Navegación de perfil
│   │   ├── CartStack.tsx       # Navegación de carrito
│   │   └── HomeStack.tsx       # Navegación de inicio y detalles
│   │
│   ├── screens/          # Pantallas principales
│   │   ├── HomeScreen.tsx
│   │   ├── ProductScreen.tsx
│   │   ├── CartScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── ReviewsScreen.tsx
│   │
│   ├── App.tsx           # Punto de entrada principal

│
├── README.md             # Documentación del proyecto
│
└── package.json          # Dependencias + Scripts

## ⚙️ Instalación y Ejecución


1. Node.js + pnpm + Expo Go en tu celular
2. Clona el repositorio:

git clone  https://github.com/manuelamarroquin/ecommerce-app.git
cd ecommerce-app
3. Instala dependencias:   (pnpm install)
4. Ejecuta la app: (pnpm start)
5. Escanea el QR en Expo Go 