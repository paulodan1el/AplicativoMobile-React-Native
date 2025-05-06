import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#9acc77',
      headerStyle: {
        backgroundColor: '#334f53',
      },
      headerShadowVisible: false,
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: '#334f53',
      },
    }}
  >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#45936c'
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
            backgroundColor: '#45936c'
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
            backgroundColor: '#45936c'
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
    
  );
}
