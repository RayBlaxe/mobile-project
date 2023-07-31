import React from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  Button,
  Spacer,
  ZStack,
  Center,
  VStack,
  ChevronLeftIcon,
  Pressable,
  Image,
  Heading,
  Input,
  Icon,
  ScrollView,
} from "native-base";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
} from "react-native";

export default function HalamanProfil({ navigation }) {
  const onPickUp = () => {
    Alert.alert(
      "Sabar ya",
      "Belom bisa edit",
      [
        {
          text: "OK dehh",
          
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Box backgroundColor={"green.900"} flex={"1"}>
      <StatusBar barStyle="dark-content" />
      {/* <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => navigation.navigate("home")} style={styles.IconBehave}>

          </Pressable>
        </View>
      </View> */}
      <VStack>
        <Box>
          <HStack
            my={"4"}
            mx={"6"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pressable
              tintColor={"white"}
              _pressed={{ opacity: 0.5 }}
              onPress={() => navigation.goBack()}
            >
              <ChevronLeftIcon color="white" />
            </Pressable>
            <Spacer />
            <Text bold fontSize={"20"} color={"white"}>
              Profil
            </Text>
            <Spacer />
            <Pressable _pressed={{ opacity: 0.5 }}>
              <Icon
                size="8"
                as={
                  <Image
                    source={require("../../../assets/icons/Bell.png")}
                    alt="Gambar"
                    tintColor={"white"}
                  />
                }
              />
            </Pressable>
          </HStack>
        </Box>
      </VStack>
      <Box mt={"8"} rounded={"3xl"} h={"full"} flex={"1"}>
        <Box mx={6}>
          <VStack space={6} mt={4}>
            <Box
              _pressed={{ opacity: 0.5 }}
              w={"100%"}
              bgColor={"white"}
              rounded={"15"}
              shadow={3}
            >
              <VStack p={"4"} space={"1"}>
                <Image
                  source={require("../../../assets/images/home/rachel.png")}
                  alt="Gambar"
                  size={"100px"}
                  alignSelf={"center"}
                />
                <Text
                  textAlign={"center"}
                  color={"green.700"}
                  bold
                  fontSize={"20"}
                >
                 Hanna Junita
                </Text>
                <Text
                  color={"gray.500"}
                  bold
                  textAlign={"center"}
                  fontSize={"14"}
                >
                  Mitra
                </Text>
                <Text
                  textAlign={"center"}
                  bold
                  color={"gray.500"}
                  fontSize={"14"}
                >
                  hanna@gmail.com
                </Text>
                
                <Pressable
                  _pressed={{ opacity: 0.5 }}
                  rounded={"8"}
                  bgColor={"green.900"}
                  w={"50%"}
                  py={"2"}
                  onPress={onPickUp}
                  alignSelf={"center"}
                  mt={"16"}
                >
                    
                  <Text
                    bold
                    textAlign={"center"}
                    color={"white"}
                    fontSize={"16"}
                  >
                    Edit profile
                  </Text>
                </Pressable>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
