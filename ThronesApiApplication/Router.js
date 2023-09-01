import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";
import { firebase } from "./firebase";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
                <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />


    
      </Stack.Navigator>
    </NavigationContainer>
  );
}