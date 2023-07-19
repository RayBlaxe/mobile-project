import React from 'react';
import { NativeBaseProvider } from "native-base"


import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import Onboarding from "./src/screens/Onboarding/OnboardingScreen"
import HomeMitra from "./src/screens/Home/HomeMitra"
import HomeUser from "./src/screens/Home/HomeUser"
import HomeAdmin from "./src/screens/Home/HomeAdmin"
import Login from "./src/screens/LoginRegister/Login"
import Register from "./src/screens/LoginRegister/Register"
import Tantangan from "./src/screens/User/Tantangan/DetailTantangan"
import Berita from "./src/screens/User/Berita/KumpulanBerita"
import Reward from "./src/screens/User/Reward/RiwayatReward"
import Pickup from "./src/screens/Mitra/Pickup/RiwayatPickup"
import Validasi from "./src/screens/Admin/Validasi/DetailValidasi"
import AdminUser from "./src/screens/Admin/User/TabelUser"
import AdminBerita from "./src/screens/Admin/Berita/TabelBerita"
import AdminMitra from "./src/screens/Admin/Mitra/TabelMitra"
import AdminTantangan from "./src/screens/Admin/Tantangan/TabelTantangan"

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
      {/* <Onboarding /> */}
      {/* <HomeMitra /> */}
      {/* <HomeAdmin /> */}
      {/* <HomeUser /> */}
      {/* <Pickup/> */}
      {/* <Tantangan/> */}
      {/* <Berita/> */}
      {/* <Reward/> */}
      <AdminUser/>
      {/* <Validasi/> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* Sampai Sini */}
    </NativeBaseProvider>
  )
}
