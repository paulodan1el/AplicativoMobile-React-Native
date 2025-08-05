import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerShadowVisible: false,
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: 'black',
      },
    }}
  >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black'
          },
          tabBarIcon: ({ color, focused,}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}  />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre nós',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black'
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />

<Tabs.Screen
        name="toDoList"
        options={{
          title: 'Pedidos',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black'
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={24} />
          ),
        }}
      />

<Tabs.Screen
        name="BuscaCEP"
        options={{
          title: 'Buscar CEP',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black'
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
    
  );
}
