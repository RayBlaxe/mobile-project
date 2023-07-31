import React from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  ScrollView,
  Spacer,
  Avatar,
  Center,
  VStack,
  IconButton,
  Pressable,
  Image,
  View,
  useToast,
} from "native-base";
import NavBar from "../../lib/components/Navbar";
import TabBar from "../../lib/components/TabBar";
import HalfButton from "../../lib/components/Home/HalfButton";
import {
  Alert,
  BackHandler,
  Dimensions,
  StatusBar as RNStatusBar,
  TouchableOpacity,
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

export default function HomeUser({navigation}) {
  const toast = useToast();
  const [showOverlay, setShowOverlay] = React.useState(false);


  return (
    <ScrollView>
      <Box backgroundColor={"green.900"}>
        <StatusBar barStyle="light-content" />
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
          mt="-4"
          py={2}
        >
          <HStack ml={5} mr={5} justifyContent="space-between">
            <HStack>
              <Image
                source={require("../../../assets/images/c4c-logo.png")}
                size={20}
                alt="C4C Logo"
              />
              <Center ml="2">
                <VStack>
                  <Text fontSize="12" color="gray.400">
                    Selamat datang
                  </Text>
                  <Text fontSize={20} bold>
                    Mahmudin
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
                  w="7"
                  h="7"
                  source={require("../../../assets/icons/Bell.png")}
                  alt="gambar sungai"
                />
              </Pressable>

              <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Avatar
                  source={require("../../../assets/images/home/rachel.png")
                
                }
                />
              </TouchableOpacity>
            </HStack>
          </HStack>
        </Box>
        <Box backgroundColor={"white"} mt={12} rounded={"3xl"} pb={"4"}>
          <Box ml={"6"} mt={2}>
            <Text fontSize={"24"} bold>
              Beranda
            </Text>
          </Box>
          <ScrollView
            horizontal
            scrollEventThrottle={32}
            pagingEnabled
            mt={2}
            style={{ overflow: "visible" }}
            showsHorizontalScrollIndicator={false}
          >
            <Box style={{ width: windowWidth }} px={6} py={4}>
              <Box bg="white" p={4} rounded="2xl" shadow={3}>
                <HStack>
                  <Image
                    rounded="lg"
                    size={16}
                    source={require("../../../assets/images/onboarding/1.jpg")}
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente atque est ipsa, cumque quasi unde.
                </Text>
              </Box>
            </Box>

            <Box
              style={{ width: windowWidth, height: 180 }}
              px={6}
              py={2}
              justifyContent="center"
            >
              <Image
                source={require("../../../assets/images/onboarding/1.jpg")}
                resizeMode="contain"
                alt="Foto Carousel"
                w="full"
                flex={1}
              />
            </Box>
          </ScrollView>

          <Box mx={6}>
            <HStack>
              <HalfButton onPress={
                ()=> navigation.navigate("tantangan")
                }>Join a Challenge</HalfButton>
              <Spacer />
              <HalfButton>Reward</HalfButton>
            </HStack>
          </Box>
          <Box mx={"6"} mt={2}>
            <Text fontSize={"24"} bold>
              Daily Login
            </Text>
            <Box alignItems={"center"} mt={4}>
              <Box
                bgColor={"white"}
                shadow={"3"}
                w={"100%"}
                h={"80"}
                alignItems={"center"}
                rounded={"lg"}
              >
                <Text bold fontSize={"18"}>
                  Daily Check-in Rewards
                </Text>
                <Text mt={"2"} textAlign={"center"} fontSize={"16"}>
                  You have earned ... Points so far, keep up the good work
                </Text>
                <Text
                  mt={"4"}
                  bold
                  textAlign={"center"}
                  fontSize={"14"}
                  color={"#007a00"}
                >
                  7 Days Daily check-in rewards
                </Text>
                <Box mt={"6"}>
                  <VStack alignItems={"center"} space={"4"}>
                    <HStack space={"6"}>
                      <VStack alignItems={"center"}>
                        <Box
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Image
                            source={require("../../../assets/icons/check.png")}
                            w={"6"}
                            h={"6"}
                            alt="Check"
                          />
                        </Box>
                        <Text>Day 1</Text>
                      </VStack>
                      <VStack alignItems={"center"}>
                        <Pressable
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          _pressed={{ opacity: 0.5 }}
                          onPress={() => {
                            setShowOverlay(true);
                            toast.show({
                              render: () => (
                                <Box
                                  bgColor={"white"}
                                  px={8}
                                  py={4}
                                  rounded={"md"}
                                  mb={"72"}
                                  style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text textAlign={"center"} fontSize={"20"}>
                                    Selamat anda mendapatkan 20 poin !!!
                                  </Text>
                                  <Pressable
                                  _pressed={{opacity: 0.5}}
                                   onPress={() => {
                                    setShowOverlay(false)}}
                                  mt={"2"} bgColor={"#007a00"} px={"4"} py={"1"} rounded={"md"}>
                                    <Text textAlign={"center"} color={"white"}>OK</Text>
                                  </Pressable>
                                </Box>
                              ),
                              onCloseComplete: () => setShowOverlay(false),
                            });
                          }}
                        >
                          <Box
                            w={"12"}
                            h={"12"}
                            rounded={"full"}
                            bgColor={"#d0d0d0"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <HStack alignItems={"center"} space={"1"}>
                              <Image
                                source={require("../../../assets/icons/P.png")}
                                w={"6"}
                                h={"6"}
                                alt="Points"
                              />
                              <Text color={"#797979"} fontSize={"12"}>
                                20
                              </Text>
                            </HStack>
                          </Box>
                        </Pressable>
                        <Text>Day 2</Text>
                      </VStack>
                      <VStack alignItems={"center"}>
                        <Pressable
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          _pressed={{ opacity: 0.5 }}
                        >
                          <Box
                            w={"12"}
                            h={"12"}
                            rounded={"full"}
                            bgColor={"#d0d0d0"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <HStack alignItems={"center"} space={"1"}>
                              <Image
                                source={require("../../../assets/icons/P.png")}
                                w={"6"}
                                h={"6"}
                                alt="Points"
                              />
                              <Text color={"#797979"} fontSize={"12"}>
                                30
                              </Text>
                            </HStack>
                          </Box>
                        </Pressable>
                        <Text>Day 3</Text>
                      </VStack>
                      <VStack alignItems={"center"}>
                        <Pressable
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          _pressed={{ opacity: 0.5 }}
                        >
                          <Box
                            w={"12"}
                            h={"12"}
                            rounded={"full"}
                            bgColor={"#d0d0d0"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <HStack alignItems={"center"} space={"1"}>
                              <Image
                                source={require("../../../assets/icons/P.png")}
                                w={"6"}
                                h={"6"}
                                alt="Points"
                              />
                              <Text color={"#797979"} fontSize={"12"}>
                                50
                              </Text>
                            </HStack>
                          </Box>
                        </Pressable>
                        <Text>Day 4</Text>
                      </VStack>
                    </HStack>
                    <HStack space={"6"}>
                      <VStack alignItems={"center"}>
                        <Pressable
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          _pressed={{ opacity: 0.5 }}
                        >
                          <Box
                            w={"12"}
                            h={"12"}
                            rounded={"full"}
                            bgColor={"#d0d0d0"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <HStack alignItems={"center"} space={"1"}>
                              <Image
                                source={require("../../../assets/icons/P.png")}
                                w={"6"}
                                h={"6"}
                                alt="Points"
                              />
                              <Text color={"#797979"} fontSize={"12"}>
                                60
                              </Text>
                            </HStack>
                          </Box>
                        </Pressable>
                        <Text>Day 5</Text>
                      </VStack>
                      <VStack alignItems={"center"}>
                        <Pressable
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          _pressed={{ opacity: 0.5 }}
                        >
                          <Box
                            w={"12"}
                            h={"12"}
                            rounded={"full"}
                            bgColor={"#d0d0d0"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <HStack alignItems={"center"} space={"1"}>
                              <Image
                                source={require("../../../assets/icons/P.png")}
                                w={"6"}
                                h={"6"}
                                alt="Points"
                              />
                              <Text color={"#797979"} fontSize={"12"}>
                                70
                              </Text>
                            </HStack>
                          </Box>
                        </Pressable>
                        <Text>Day 6</Text>
                      </VStack>
                      <VStack alignItems={"center"}>
                        <Pressable
                          w={"12"}
                          h={"12"}
                          rounded={"full"}
                          bgColor={"#007a00"}
                          _pressed={{ opacity: 0.5 }}
                        >
                          <Box
                            w={"12"}
                            h={"12"}
                            rounded={"full"}
                            bgColor={"#d0d0d0"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <HStack alignItems={"center"} space={"1"}>
                              <Image
                                source={require("../../../assets/icons/P.png")}
                                w={"6"}
                                h={"6"}
                                alt="Points"
                              />
                              <Text color={"#797979"} fontSize={"12"}>
                                100
                              </Text>
                            </HStack>
                          </Box>
                        </Pressable>
                        <Text>Day 7</Text>
                      </VStack>
                    </HStack>
                    <HStack></HStack>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {showOverlay && (
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            backgroundColor="black"
            opacity={0.5}
            zIndex={999}
          />
        )}
      </Box>
    </ScrollView>
  );
}
