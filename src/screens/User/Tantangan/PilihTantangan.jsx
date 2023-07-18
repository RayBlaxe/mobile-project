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
import NavBar from "../../../lib/components/Navbar";
import TabBar from "../../../lib/components/TabBar";
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
     
      <Box backgroundColor={"white"} mt={"20"} rounded={"3xl"} h={"full"}>
        <Box ml={"4"} mt={2}>
          <Text fontSize={"24"} bold>
            Menu
          </Text>
        </Box>
        <Box mx={6}>
          <VStack space={4} mt={4}>
            <HStack space={4}>
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
                      source={require("../../../../assets/icons/groups.png")}
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
            <HStack space={4}>
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
                      source={require("../../../../assets/icons/work.png")}
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
            <HStack space={4}>
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
                      source={require("../../../../assets/icons/maps.png")}
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
            <HStack space={4}>
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
                      source={require("../../../../assets/icons/recycle.png")}
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
            <HStack space={4}>
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
                      source={require("../../../../assets/icons/news.png")}
                      alt="Gambar"
                    />
                  </Box>
                  <Center h={"full"} flex={"1"}>
                    <Text fontSize={"16"} bold>
                      Data berita dan informasi
                    </Text>
                  </Center>
                </HStack>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
