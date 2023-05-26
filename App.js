import React from 'react';
import { NativeBaseProvider } from "native-base"


import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import Onboarding from "./src/screens/Onboarding/OnboardingScreen"
import Home from "./src/screens/Home/Home"

export default function App() {
  return (
    // Production
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         options={{ headerShown: false }}
    //         name="onboarding"
    //         component={Onboarding}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: "slide_from_right" }}
    //         name="login"
    //         component={LoginScreen}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </NativeBaseProvider>

    // Development
    // Uncomment aja bagian dalam dari NativeBaseProvider bawah ini
    // untuk development screen masing-masing

    <NativeBaseProvider>
      {/* Box ini */}

      {/* <EmailVerificationScreen /> */}
      <Onboarding />
      {/* <Home /> */}
      {/* Sampai Sini */}
    </NativeBaseProvider>
  )
}
