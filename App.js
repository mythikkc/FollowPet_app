import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/homeScreen";
import LoginScreen from "./src/InicioS_Screen";
import RegistroScreen from "./src/registroScreen"; 
import indexscreen from "./src/indexScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Iniciar Sesión" }}
        />
        <Stack.Screen
          name="Registro"
          component={RegistroScreen}
          options={{ title: "Regístrate" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
