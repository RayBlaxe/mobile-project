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
  IconButton,
  Pressable,
  Image,
  Heading,
  Input,
  Icon,
  ScrollView,
  ChevronLeftIcon,
} from "native-base";
import NavBar from "../../../lib/components/Navbar";
import TabBar from "../../../lib/components/TabBar";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;

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
            <Box tintColor={"white"}>
              <ChevronLeftIcon color="white" />
            </Box>
            <Spacer />
            <Text bold fontSize={"20"} color={"white"}>
              Berita & Informasi
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
      </Box>
      <Box
        backgroundColor={"white"}
        mt={"8"}
        rounded={"3xl"}
        h={"full"}
        flex={"1"}
      >
        <Center mx={"6"}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              shadow={"4"}
              placeholder="Search for news"
              bgColor={"white"}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="2"
              mt={"4"}
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

        <ScrollView flex={"1"}>
          <Box>
            <VStack space={4}>
              <Pressable _pressed={{ opacity: 0.5 }}>
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <ScrollView
                    horizontal
                    scrollEventThrottle={32}
                    pagingEnabled
                    mt={2}
                    style={{ overflow: "visible" }}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Box style={{ width: windowWidth }} px={6} py={4}>
                      <Box bg="white" p={4} rounded="2xl" shadow={3} h={"48"}>
                        <HStack>
                          <Image
                            rounded="lg"
                            size={16}
                            source={require("../../../../assets/images/onboarding/1.jpg")}
                            alt="berita tahun"
                          />
                          <Box justifyContent="center" ml={4} width={250} p={2}>
                            <Text
                              fontSize={16}
                              fontWeight="bold"
                              color="gray.900"
                              letterSpacing={0.5}
                            >
                              Tahun 2020 Adalah Tahun Penuh Tantangan
                            </Text>
                            <Text mt={1} color="gray.500" fontSize={12}>
                              Junaedi
                            </Text>
                          </Box>
                        </HStack>
                        <Text mt={3}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sapiente atque est ipsa, cumque quasi unde.
                        </Text>
                      </Box>
                    </Box>

                    <Box style={{ width: windowWidth }} px={6} py={4}>
                      <Box
                        bg="white"
                        rounded="2xl"
                        shadow={3}
                        h={"48"}
                        overflow={"hidden"}
                      >
                        <Image
                          rounded="lg"
                          source={require("../../../../assets/images/onboarding/1.jpg")}
                          alt="berita tahun"
                        />
                      </Box>
                    </Box>
                  </ScrollView>
                </HStack>
              </Pressable>
              <Pressable _pressed={{ opacity: 0.5 }}>
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <ScrollView
                    horizontal
                    scrollEventThrottle={32}
                    pagingEnabled
                    mt={2}
                    style={{ overflow: "visible" }}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Box style={{ width: windowWidth }} px={6} py={4}>
                      <Box bg="white" p={4} rounded="2xl" shadow={3} h={"48"}>
                        <HStack>
                          <Image
                            rounded="lg"
                            size={16}
                            source={require("../../../../assets/images/onboarding/1.jpg")}
                            alt="berita tahun"
                          />
                          <Box justifyContent="center" ml={4} width={250} p={2}>
                            <Text
                              fontSize={16}
                              fontWeight="bold"
                              color="gray.900"
                              letterSpacing={0.5}
                            >
                              Tahun 2020 Adalah Tahun Penuh Tantangan
                            </Text>
                            <Text mt={1} color="gray.500" fontSize={12}>
                              Junaedi
                            </Text>
                          </Box>
                        </HStack>
                        <Text mt={3}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sapiente atque est ipsa, cumque quasi unde.
                        </Text>
                      </Box>
                    </Box>

                    <Box style={{ width: windowWidth }} px={6} py={4}>
                      <Box
                        bg="white"
                        rounded="2xl"
                        shadow={3}
                        h={"48"}
                        overflow={"hidden"}
                      >
                        <Image
                          rounded="lg"
                          source={require("../../../../assets/images/onboarding/1.jpg")}
                          alt="berita tahun"
                        />
                      </Box>
                    </Box>
                  </ScrollView>
                </HStack>
              </Pressable>
              <Pressable _pressed={{ opacity: 0.5 }}>
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <ScrollView
                    horizontal
                    scrollEventThrottle={32}
                    pagingEnabled
                    mt={2}
                    style={{ overflow: "visible" }}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Box style={{ width: windowWidth }} px={6} py={4}>
                      <Box bg="white" p={4} rounded="2xl" shadow={3} h={"48"}>
                        <HStack>
                          <Image
                            rounded="lg"
                            size={16}
                            source={require("../../../../assets/images/onboarding/1.jpg")}
                            alt="berita tahun"
                          />
                          <Box justifyContent="center" ml={4} width={250} p={2}>
                            <Text
                              fontSize={16}
                              fontWeight="bold"
                              color="gray.900"
                              letterSpacing={0.5}
                            >
                              Tahun 2020 Adalah Tahun Penuh Tantangan
                            </Text>
                            <Text mt={1} color="gray.500" fontSize={12}>
                              Junaedi
                            </Text>
                          </Box>
                        </HStack>
                        <Text mt={3}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sapiente atque est ipsa, cumque quasi unde.
                        </Text>
                      </Box>
                    </Box>

                    <Box style={{ width: windowWidth }} px={6} py={4}>
                      <Box
                        bg="white"
                        rounded="2xl"
                        shadow={3}
                        h={"48"}
                        overflow={"hidden"}
                      >
                        <Image
                          rounded="lg"
                          source={require("../../../../assets/images/onboarding/1.jpg")}
                          alt="berita tahun"
                        />
                      </Box>
                    </Box>
                  </ScrollView>
                </HStack>
              </Pressable>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
