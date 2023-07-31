import React from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  Button,
  Spacer,
  Avatar,
  Center,
  VStack,
  IconButton,
  Pressable,
  Image,
  View,
  ScrollView,
} from "native-base";
import NavBar from "../../lib/components/Navbar";
import TabBar from "../../lib/components/TabBar";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
} from "react-native";

const statusBarHeight = RNStatusBar.currentHeight;
// const styles = StyleSheet.create({
//   NavContainer: {
//     position: "absolute",
//     alignItems: "center",
//     bottom: 20,
//   },
//   NavBar: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     width: "90%",
//     backgroundColor: "white",
//     borderRadius: 25,
//   },
//   IconBehave: {
//     padding: 10,
//   },
// });

export default function HomeAdmin({navigation}) {
  return (
    <Box backgroundColor={"green.900"} h={"full"} flex={"1"}>
      <StatusBar barStyle="light-content" />
      <Box
        bgColor={"white"}
        width={"100%"}
        rounded="3xl"
        shadow={"5"}
        style={{ paddingTop: statusBarHeight + 4 }}
        mt="-6"
        // pb={2}
      >
        <HStack ml={5} mr={5} justifyContent="space-between">
          <HStack>
            <Image
              source={require("../../../assets/images/c4c-logo.png")}
              size={20}
              alt="c4c logo"
            />
            <Center ml="2">
              <VStack>
                <Text fontSize="12" color="gray.400">
                  Selamat Datang kembali
                </Text>
                <Text bold fontSize={20}>
                  Udin Mah
                </Text>
                <Text mt={"-2"} fontSize="12" color="gray.400">
                  Admin
                </Text>
              </VStack>
            </Center>
          </HStack>

          <HStack alignItems="center">
            <Pressable
              position="relative"
              justifyContent="center"
              _pressed={{ opacity: 0.5 }}
              mr={4}
            >
              <Box
                zIndex="1"
                position="absolute"
                top="0"
                right="0"
                w="4"
                h="4"
                bg="green.600"
                justifyContent="center"
                alignItems="center"
                rounded="full"
              >
                <Text fontSize="10" color="white">
                  1
                </Text>
              </Box>
              <Image
                w="8"
                h="8"
                source={require("../../../assets/icons/Bell.png")}
                alt="gambar sungai"
              />
            </Pressable>

            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
              <Avatar
                source={require("../../../assets/images/home/rachel.png")}
                alt="Gambar"
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
      <Box backgroundColor={"white"} mt={"20"} roundedTop={"3xl"} h={"full"} flex={"1"} >
        <Box ml={"4"} mt={2}>
          <Text fontSize={"24"} bold>
            Menu
          </Text>
        </Box>
        <Box mx={6} h={"full"} flex={"1"} >
          <ScrollView py={"2"} flex={"1"} showsVerticalScrollIndicator={false}>
            <VStack space={4} mt={4} h={"full"} pb={"8"}>
              {/* <ScrollView flex={"1"}> */}
              <HStack space={4} px={"2"}>
                <Pressable
                  _pressed={{ opacity: 0.5 }}
                  w={"100%"}
                  h={20}
                  bgColor={"white"}
                  rounded={"lg"}
                  shadow={3}
                  onPress={() => navigation.navigate("tabeluser")}
                >
                  <HStack space={4} alignItems={"center"} ml={4} h={"full"}>
                    <Box>
                      <Image
                        source={require("../../../assets/icons/groups.png")}
                        alt="Gambar"
                      />
                    </Box>
                    <Center h={"full"} flex={"1"}>
                      <Text fontSize={"16"} bold>
                        Data User
                      </Text>
                    </Center>
                  </HStack>
                </Pressable>
              </HStack>
              <HStack space={4} px={"2"}>
                <Pressable
                  _pressed={{ opacity: 0.5 }}
                  w={"100%"}
                  h={20}
                  bgColor={"white"}
                  rounded={"lg"}
                  shadow={3}
                >
                  <HStack space={4} alignItems={"center"} ml={4} h={"full"}>
                    <Box>
                      <Image
                        source={require("../../../assets/icons/work.png")}
                        alt="Gambar"
                      />
                    </Box>
                    <Center h={"full"} flex={"1"}>
                      <Text fontSize={"16"} bold>
                        Data Mitra
                      </Text>
                    </Center>
                  </HStack>
                </Pressable>
              </HStack>
              <HStack space={4} px={"2"}>
                <Pressable
                  _pressed={{ opacity: 0.5 }}
                  w={"100%"}
                  h={20}
                  bgColor={"white"}
                  rounded={"lg"}
                  shadow={3}
                >
                  <HStack space={4} alignItems={"center"} ml={4} h={"full"}>
                    <Box>
                      <Image
                        source={require("../../../assets/icons/maps.png")}
                        alt="Gambar"
                      />
                    </Box>
                    <Center h={"full"} flex={"1"}>
                      <Text fontSize={"16"} bold>
                        Data Tantangan
                      </Text>
                    </Center>
                  </HStack>
                </Pressable>
              </HStack>
              <HStack space={4} px={"2"}>
                <Pressable
                  _pressed={{ opacity: 0.5 }}
                  w={"100%"}
                  h={20}
                  bgColor={"white"}
                  rounded={"lg"}
                  shadow={3}
                >
                  <HStack space={4} alignItems={"center"} ml={4} h={"full"}>
                    <Box>
                      <Image
                        source={require("../../../assets/icons/recycle.png")}
                        alt="Gambar"
                      />
                    </Box>
                    <Center h={"full"} flex={"1"}>
                      <Text fontSize={"16"} bold>
                        Validasi sampah
                      </Text>
                    </Center>
                  </HStack>
                </Pressable>
              </HStack>
              <HStack space={4} px={"2"}>
                <Pressable
                  _pressed={{ opacity: 0.5 }}
                  w={"100%"}
                  h={20}
                  bgColor={"white"}
                  rounded={"lg"}
                  shadow={3}
                  onPress={() => navigation.navigate("tabelartikel")}
                >
                  <HStack space={4} alignItems={"center"} ml={4} h={"full"}>
                    <Box>
                      <Image
                        source={require("../../../assets/icons/news.png")}
                        alt="Gambar"
                      />
                    </Box>
                    <Center h={"full"} flex={"1"}>
                      <Text fontSize={"16"} bold>
                        Data Artikel
                      </Text>
                    </Center>
                  </HStack>
                </Pressable>
              </HStack>
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
}
