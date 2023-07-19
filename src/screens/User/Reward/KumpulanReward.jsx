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
  Divider,
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
            Reward
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
      <Box mx={"6"}>
        <Box w={"full"} bgColor={"white"} rounded={"15"} px={"4"} py={"2"}>
          <HStack>
            <VStack>
              <HStack space={"1"} alignItems={"center"}>
                <Image
                  source={require("../../../../assets/icons/points.png")}
                  size={"5"}
                  alt="coin"
                />
                <Text bold fontSize={"16"}>
                  Points
                </Text>
              </HStack>

              <Text bold fontSize={"24"}>
                215 Pts
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>

      <Box>
        <HStack space={4} alignItems={"center"}>
          <ScrollView
            horizontal
            scrollEventThrottle={32}
            pagingEnabled
            mt={2}
            style={{ overflow: "visible" }}
            showsHorizontalScrollIndicator={false}
          >
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
                  source={require("../../../../assets/images/user/caraousel1.jpg")}
                  alt="berita tahun"
                  resizeMode="cover"
                />
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
                  source={require("../../../../assets/images/user/caraousel2.jpg")}
                  alt="berita tahun"
                  resizeMode="cover"
                />
              </Box>
            </Box>
          </ScrollView>
        </HStack>
      </Box>
      <Box
        backgroundColor={"white"}
        mt={"8"}
        rounded={"3xl"}
        h={"full"}
        flex={"1"}
        p={"6"}
      >
        <ScrollView flex={"1"}>
          <Box w={"full"}>
            <VStack space={4}>
              <HStack space={"4"}>
                <Box flex={"1"}>
                  <Text textAlign={"left"} bold fontSize={"20"}>
                    Reward
                  </Text>
                </Box>
                <Box flex={"1"} alignItems={"flex-end"}>
                  <Text textAlign={"right"} bold fontSize={"20"}>
                    Points
                  </Text>
                </Box>
              </HStack>
              <Divider />
              <HStack space={"4"}>
                <Box flex={"1"}>
                  <Text textAlign={"left"} bold fontSize={"18"}>
                    Pulsa
                  </Text>
                </Box>
                <Box flex={"1"} alignItems={"flex-end"}>
                  <Text textAlign={"right"} bold fontSize={"18"}>
                    18 Pts
                  </Text>
                </Box>
              </HStack>
              <HStack space={"4"}>
                <Box flex={"1"}>
                  <Text textAlign={"left"} bold fontSize={"18"}>
                    Voucher Belanja
                  </Text>
                </Box>
                <Box flex={"1"} alignItems={"flex-end"}>
                  <Text textAlign={"right"} bold fontSize={"18"}>
                    18 Pts
                  </Text>
                </Box>
              </HStack>
              <HStack space={"4"}>
                <Box flex={"1"}>
                  <Text textAlign={"left"} bold fontSize={"18"}>
                    Tiket liburan
                  </Text>
                </Box>
                <Box flex={"1"} alignItems={"flex-end"}>
                  <Text textAlign={"right"} bold fontSize={"18"}>
                    18 Pts
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
