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

export default function PilihPickup({ navigation }) {
  return (
    <Box backgroundColor={"green.900"} flex={"1"}>
      <StatusBar barStyle="dark-content" />
      {/* <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => navigation.navigate("home")} style={styles.IconBehave}>

          </Pressable>
        </View>
      </View> */}
      <Box>
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
              Daftar Pick Up
            </Text>
            <Spacer />
            <Pressable _pressed={{ opacity: 0.5 }}>
              <Icon
                size="8"
                as={
                  <Image
                    source={require("../../../../assets/icons/Bell.png")}
                    alt="Gambar"
                    tintColor={"white"}
                  />
                }
              />
            </Pressable>
          </HStack>
        </Box>
        <Center mx={"6"}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Search for challenges"
              bgColor={"white"}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="2"
              InputLeftElement={
                <Icon
                  ml="2"
                  size="8"
                  as={
                    <Image
                      source={require("../../../../assets/icons/search.png")}
                      alt="Gambar"
                    />
                  }
                />
              }
            />
          </VStack>
        </Center>
      </Box>
      <Box mt={"8"} rounded={"3xl"} h={"full"} flex={"1"}>
        <ScrollView flex={"1"}>
          <Box mx={6}>
            <VStack space={4} mt={4}>
              <Box
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"140px"}
                bgColor={"white"}
                rounded={"15"}
                shadow={3}
              >
                <VStack p={"4"}>
                  <HStack alignItems={"center"}>
                    <Text bold fontSize={"20"}>
                      Karyn Santoso
                    </Text>
                    <Spacer />
                    <Text bold fontSize={"16"}>
                      25 Kg
                    </Text>
                  </HStack>
                  <HStack alignItems={"center"}>
                    <Text fontSize={"12"}>Sampah Plastik</Text>
                    <Spacer />
                    <HStack alignItems={"center"} space={"1"}>
                      <Image
                        source={require("../../../../assets/icons/Location.png")}
                        alt="Gambar"
                        size={"6"}
                      />
                      <Text bold fontSize={"14"} mb={"1"}>
                        Pekanbaru
                      </Text>
                    </HStack>
                  </HStack>
                  <Box h={"4"}></Box>
                  <HStack alignItems={"center"}>
                    <HStack alignItems={"center"}>
                      <Image
                        source={require("../../../../assets/icons/Calendar.png")}
                        alt="Gambar"
                        size={"8"}
                      />
                      <VStack>
                        <Text fontSize={"12"}>Jadwal Penjemputan</Text>
                        <Text bold fontSize={"12"}>
                          12AM-5PM
                        </Text>
                      </VStack>
                    </HStack>
                    <Spacer />
                    <Pressable
                      _pressed={{ opacity: 0.5 }}
                      bgColor={"green.900"}
                      py={"2"}
                      px={"6"}
                      rounded={"10"}
                      onPress={() => navigation.navigate("detailpickup")}
                    >
                      <Text bold fontSize={"16"} color={"white"}>
                        Pick Up
                      </Text>
                    </Pressable>
                  </HStack>
                </VStack>
              </Box>
              <Box
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"140px"}
                bgColor={"white"}
                rounded={"15"}
                shadow={3}
              >
                <VStack p={"4"}>
                  <HStack alignItems={"center"}>
                    <Text bold fontSize={"20"}>
                      Karyn Santoso
                    </Text>
                    <Spacer />
                    <Text bold fontSize={"16"}>
                      25 Kg
                    </Text>
                  </HStack>
                  <HStack alignItems={"center"}>
                    <Text fontSize={"12"}>Sampah Plastik</Text>
                    <Spacer />
                    <HStack alignItems={"center"} space={"1"}>
                      <Image
                        source={require("../../../../assets/icons/Location.png")}
                        alt="Gambar"
                        size={"6"}
                      />
                      <Text bold fontSize={"14"} mb={"1"}>
                        Pekanbaru
                      </Text>
                    </HStack>
                  </HStack>
                  <Box h={"4"}></Box>
                  <HStack alignItems={"center"}>
                    <HStack alignItems={"center"}>
                      <Image
                        source={require("../../../../assets/icons/Calendar.png")}
                        alt="Gambar"
                        size={"8"}
                      />
                      <VStack>
                        <Text fontSize={"12"}>Jadwal Penjemputan</Text>
                        <Text bold fontSize={"12"}>
                          12AM-5PM
                        </Text>
                      </VStack>
                    </HStack>
                    <Spacer />
                    <Pressable
                      _pressed={{ opacity: 0.5 }}
                      bgColor={"green.900"}
                      py={"2"}
                      px={"6"}
                      rounded={"10"}
                    >
                      <Text bold fontSize={"16"} color={"white"}>
                        Pick Up
                      </Text>
                    </Pressable>
                  </HStack>
                </VStack>
              </Box>
              <Box
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"140px"}
                bgColor={"white"}
                rounded={"15"}
                shadow={3}
              >
                <VStack p={"4"}>
                  <HStack alignItems={"center"}>
                    <Text bold fontSize={"20"}>
                      Karyn Santoso
                    </Text>
                    <Spacer />
                    <Text bold fontSize={"16"}>
                      25 Kg
                    </Text>
                  </HStack>
                  <HStack alignItems={"center"}>
                    <Text fontSize={"12"}>Sampah Plastik</Text>
                    <Spacer />
                    <HStack alignItems={"center"} space={"1"}>
                      <Image
                        source={require("../../../../assets/icons/Location.png")}
                        alt="Gambar"
                        size={"6"}
                      />
                      <Text bold fontSize={"14"} mb={"1"}>
                        Pekanbaru
                      </Text>
                    </HStack>
                  </HStack>
                  <Box h={"4"}></Box>
                  <HStack alignItems={"center"}>
                    <HStack alignItems={"center"}>
                      <Image
                        source={require("../../../../assets/icons/Calendar.png")}
                        alt="Gambar"
                        size={"8"}
                      />
                      <VStack>
                        <Text fontSize={"12"}>Jadwal Penjemputan</Text>
                        <Text bold fontSize={"12"}>
                          12AM-5PM
                        </Text>
                      </VStack>
                    </HStack>
                    <Spacer />
                    <Pressable
                      _pressed={{ opacity: 0.5 }}
                      bgColor={"green.900"}
                      py={"2"}
                      px={"6"}
                      rounded={"10"}
                    >
                      <Text bold fontSize={"16"} color={"white"}>
                        Pick Up
                      </Text>
                    </Pressable>
                  </HStack>
                </VStack>
              </Box>
              <Box
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"140px"}
                bgColor={"white"}
                rounded={"15"}
                shadow={3}
              >
                <VStack p={"4"}>
                  <HStack alignItems={"center"}>
                    <Text bold fontSize={"20"}>
                      Karyn Santoso
                    </Text>
                    <Spacer />
                    <Text bold fontSize={"16"}>
                      25 Kg
                    </Text>
                  </HStack>
                  <HStack alignItems={"center"}>
                    <Text fontSize={"12"}>Sampah Plastik</Text>
                    <Spacer />
                    <HStack alignItems={"center"} space={"1"}>
                      <Image
                        source={require("../../../../assets/icons/Location.png")}
                        alt="Gambar"
                        size={"6"}
                      />
                      <Text bold fontSize={"14"} mb={"1"}>
                        Pekanbaru
                      </Text>
                    </HStack>
                  </HStack>
                  <Box h={"4"}></Box>
                  <HStack alignItems={"center"}>
                    <HStack alignItems={"center"}>
                      <Image
                        source={require("../../../../assets/icons/Calendar.png")}
                        alt="Gambar"
                        size={"8"}
                      />
                      <VStack>
                        <Text fontSize={"12"}>Jadwal Penjemputan</Text>
                        <Text bold fontSize={"12"}>
                          12AM-5PM
                        </Text>
                      </VStack>
                    </HStack>
                    <Spacer />
                    <Pressable
                      _pressed={{ opacity: 0.5 }}
                      bgColor={"green.900"}
                      py={"2"}
                      px={"6"}
                      rounded={"10"}
                    >
                      <Text bold fontSize={"16"} color={"white"}>
                        Pick Up
                      </Text>
                    </Pressable>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
