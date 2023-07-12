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

export default function Home() {
  return (
    <Box backgroundColor={"green.900"}>
      <StatusBar barStyle="dark-content" />
      {/* <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => navigation.navigate("home")} style={styles.IconBehave}>

          </Pressable>
        </View>
      </View> */}
      <Box
        bgColor={"white"}
        width={"100%"}
        rounded="3xl"
        shadow={"5"}
        style={{ paddingTop: statusBarHeight + 4 }}
        mt="-12"
        pb={2}
      >
        <HStack ml={5} mr={5} justifyContent="space-between">
          <HStack>
            <Image
              source={require("../../../assets/images/c4c-logo.png")}
              size={20}
              alt="Bantu Guru Logo"
            />
            <Center ml="2">
              <VStack>
                <Text fontSize="12" color="gray.400">
                  Halo
                </Text>
                <Text fontSize={20}>Hanna Junita</Text>
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
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
      <Box backgroundColor={"white"} mt={12} rounded={"3xl"}>
        <Box ml={"4"} mt={2}>
          <Text fontSize={"24"} bold>
            Kategori
          </Text>
        </Box>
        <Box mx={6}>
          <VStack>
            <HStack
              mb="2.5"
              mt="1.5"
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Pressable
                position="relative"
                bgColor={"gray.400"}
                rounded={"md"}
                justifyContent="center"
                _pressed={{ opacity: 0.5 }}
                mr={4}
                w={"140px"}
                h={"140px"}
              >
                <VStack ml={4} justifyContent={"flex-end"}>
                  <Image
                    w="30%"
                    h="45%"
                    source={require("../../../assets/icons/sampah.png")}
                    alt="gambar sungai"
                  />
                  <Text fontSize="20" color="black" bold mt="2">
                    Sampah
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                position="relative"
                bgColor={"gray.400"}
                rounded={"md"}
                justifyContent="center"
                _pressed={{ opacity: 0.5 }}
                mr={4}
                w={"140px"}
                h={"140px"}
              >
                <VStack ml={4} justifyContent={"flex-end"}>
                  <Image
                    w="40%"
                    h="45%"
                    source={require("../../../assets/icons/user.png")}
                    alt="gambar sungai"
                  />
                  <Text fontSize="20" color="black" bold mt="2">
                    Profil
                  </Text>
                </VStack>
              </Pressable>
            </HStack>
            <HStack
              mb="2.5"
              mt="1.5"
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Pressable
                position="relative"
                bgColor={"gray.400"}
                rounded={"md"}
                justifyContent="center"
                _pressed={{ opacity: 0.5 }}
                mr={4}
                w={"140px"}
                h={"140px"}
              >
                <VStack ml={4} justifyContent={"flex-end"}>
                  <Image
                    w="40%"
                    h="45%"
                    source={require("../../../assets/icons/Settings.png")}
                    alt="gambar sungai"
                  />
                  <Text fontSize="20" color="black" bold mt="2">
                    Pengaturan
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                position="relative"
                bgColor={"gray.400"}
                rounded={"md"}
                justifyContent="center"
                _pressed={{ opacity: 0.5 }}
                mr={4}
                w={"140px"}
                h={"140px"}
              >
                <VStack ml={4} justifyContent={"flex-end"}>
                  <Image
                    w="40%"
                    h="45%"
                    source={require("../../../assets/icons/history.png")}
                    alt="gambar sungai"
                  />
                  <Text fontSize="20" color="black" bold mt="2">
                    Riwayat
                  </Text>
                </VStack>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
        <Box mx={"4"} mt={2}>
          <Text fontSize={"24"} bold>
            Dashboard
          </Text>
          <Box alignItems={"center"} mt={4}>
            <Box
              bgColor={"white"}
              shadow={"3"}
              w={80}
              h={"64"}
              alignItems={"center"}
            >
              <HStack alignItems={"flex-end"} space={10}>
                <Box h={48} w={4} bgColor={"gray.600"} rounded={"lg"}></Box>
                <Box h={20} w={4} bgColor={"gray.600"} rounded={"lg"}></Box>
                <Box h={16} w={4} bgColor={"gray.600"} rounded={"lg"}></Box>
                <Box h={32} w={4} bgColor={"gray.600"} rounded={"lg"}></Box>
                <Box h={36} w={4} bgColor={"gray.600"} rounded={"lg"}></Box>
                <Box h={24} w={4} bgColor={"gray.600"} rounded={"lg"}></Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
