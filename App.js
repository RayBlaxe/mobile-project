import React from 'react';
import { NativeBaseProvider } from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSlideFromRightTransition } from 'react-navigation-slide-from-right-transition';





import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import Onboarding from "./src/screens/Onboarding/OnboardingScreen"
import HomeMitra from "./src/screens/Home/HomeMitra"
import HomeUser from "./src/screens/Home/HomeUser"
import HomeAdmin from "./src/screens/Home/HomeAdmin"
import Login from "./src/screens/LoginRegister/Login"
import Register from "./src/screens/LoginRegister/Register"
import Tantangan from "./src/screens/User/Tantangan/PilihTantangan"
import TantanganDetail from "./src/screens/User/Tantangan/DetailTantangan"
import Artikel from "./src/screens/User/Artikel/KumpulanArtikel"
import Reward from "./src/screens/User/Reward/KumpulanReward"
import Pickup from "./src/screens/Mitra/Pickup/PilihPickup"
import PickupDetail from "./src/screens/Mitra/Pickup/DetailPickup"
import RiwayatPickup from "./src/screens/Mitra/Pickup/RiwayatPickup"
import Validasi from "./src/screens/Admin/Validasi/DetailValidasi"
import AdminUser from "./src/screens/Admin/User/TabelUser"
import AdminUserTambah from "./src/screens/Admin/User/TambahUser"
import AdminArtikel from "./src/screens/Admin/Artikel/TabelArtikel"
import AdminArtikelTambah from "./src/screens/Admin/Artikel/TambahArtikel"
import AdminArtikelEdit from "./src/screens/Admin/Artikel/EditArtikel"
import AdminTantangan from "./src/screens/Admin/Tantangan/TambahTantangan"
import HalamanProfil from './src/screens/Profil/HalamanProfil';

export default function App() {
  const Stack = createStackNavigator();

  return (
    // // Production User
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="onboarding"
            component={Onboarding}
          />
          <Stack.Screen
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="register"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="home"
            component={HomeUser}
          />
          <Stack.Screen
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="tantangan"
            component={Tantangan}
          />
          <Stack.Screen 
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="detailtantangan"
            component={TantanganDetail}
          />
          <Stack.Screen 
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="riwayat"
            component={RiwayatPickup}
          />
          <Stack.Screen 
            options={{ headerShown: false, animation: createSlideFromRightTransition }}
            name="profile"
            component={HalamanProfil}
          />
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    // Production Mitra
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         options={{ headerShown: false }}
    //         name="onboarding"
    //         component={Onboarding}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="login"
    //         component={Login}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="register"
    //         component={Register}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="home"
    //         component={HomeMitra}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="pickup"
    //         component={Pickup}
    //       />
    //       <Stack.Screen 
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="detailpickup"
    //         component={PickupDetail}
    //       />
    //       <Stack.Screen 
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="riwayat"
    //         component={RiwayatPickup}
    //       />
    //       <Stack.Screen 
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="profile"
    //         component={HalamanProfil}
    //       />
          
          
          
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </NativeBaseProvider>
    //Production Admin
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         options={{ headerShown: false }}
    //         name="onboarding"
    //         component={Onboarding}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="login"
    //         component={Login}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="register"
    //         component={Register}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="home"
    //         component={HomeAdmin}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="tabelartikel"
    //         component={AdminArtikel }
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="TambahArtikel"
    //         component={AdminArtikelTambah }
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="EditArtikel"
    //         component={AdminArtikelEdit }
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="tabeluser"
    //         component={AdminUser}
    //       />
    //       <Stack.Screen
    //         options={{ headerShown: false, animation: createSlideFromRightTransition }}
    //         name="tambahuser"
    //         component={AdminUserTambah}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </NativeBaseProvider>

    // Development
    // Uncomment aja bagian dalam dari NativeBaseProvider bawah ini
    // untuk development screen masing-masing

    // <NativeBaseProvider>
    //   {/* Box ini */}

    //   {/* <EmailVerificationScreen /> */}
    //   {/* <Onboarding /> */}
    //   {/* <HomeMitra /> */}
    //   {/* <HomeAdmin /> */}
    //   {/* <HomeUser /> */}
    //   {/* <Pickup/> */}
    //   {/* <Tantangan/> */}
    //   {/* <Artikel/> */}
    //   <Reward/>
    //   {/* <AdminUser/> */}
    //   {/* <AdminArtikelEdit/> */}
    //   {/* <Validasi/> */}
    //   {/* <Login /> */}
    //   {/* <Register /> */}
    //   {/* Sampai Sini */}
    // </NativeBaseProvider>
  )
}
