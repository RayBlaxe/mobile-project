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
    <Box backgroundColor={"green.900"} flex={"1"}>
      <StatusBar barStyle="dark-content" />
      {/* <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => navigation.navigate("home")} style={styles.IconBehave}>

          </Pressable>
        </View>
      </View> */}
      <Box>
        <Box my={"4"} mx={"6"} alignItems={"flex-end"} >
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
        </Box>
        <Center mx={"6"} >
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
            <Pressable
              w={"32"}
              bgColor={"white"}
              p={"2"}
              px={"2"}
              rounded={"10"}
              _pressed={{ opacity: 0.5 }}
            >
              <Center>
                <Text bold>Claim all point</Text>
              </Center>
            </Pressable>
          </VStack>
        </Center>
      </Box>
      <Box backgroundColor={"white"} mt={"8"} rounded={"3xl"} h={"full"} flex={"1"}>
        <Box ml={"4"} mt={2}>
          <Text fontSize={"24"} bold>
            Tantangan
          </Text>
        </Box>
        <ScrollView flex={"1"} >
          <Box mx={6} >
            <VStack space={4} mt={4}>
              <Pressable
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"145px"}
                bgColor={"#375F56"}
                rounded={"15"}
                shadow={3}
              >
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <Box flex={"0.8"}>
                    <Image
                      source={require("../../../../assets/images/user/pilah.png")}
                      alt="Gambar"
                      h={"145px"}
                      roundedBottomLeft={"15"}
                      roundedTopLeft={"15"}
                    />
                  </Box>
                  <Box flex={"1.2"}>
                    <Text bold fontSize={"20"} color={"white"}>
                      Pilah sampah
                    </Text>
                    <Text fontSize={"14"} color={"white"}>
                      20 Poin
                    </Text>
                  </Box>
                </HStack>
              </Pressable>
              <Pressable
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"145px"}
                bgColor={"#375F56"}
                sat
                rounded={"15"}
                shadow={3}
              >
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <Box flex={"0.8"}>
                    <Image
                      source={require("../../../../assets/images/user/pilah.png")}
                      alt="Gambar"
                      h={"145px"}
                      roundedBottomLeft={"15"}
                      roundedTopLeft={"15"}
                    />
                  </Box>
                  <Box flex={"1.2"}>
                    <Text bold fontSize={"20"} color={"white"}>
                      Pilah sampah
                    </Text>
                    <Text fontSize={"14"} color={"white"}>
                      20 Poin
                    </Text>
                  </Box>
                </HStack>
              </Pressable>
              <Pressable
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"145px"}
                bgColor={"#375F56"}
                sat
                rounded={"15"}
                shadow={3}
              >
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <Box flex={"0.8"}>
                    <Image
                      source={require("../../../../assets/images/user/pilah.png")}
                      alt="Gambar"
                      h={"145px"}
                      roundedBottomLeft={"15"}
                      roundedTopLeft={"15"}
                    />
                  </Box>
                  <Box flex={"1.2"}>
                    <Text bold fontSize={"20"} color={"white"}>
                      Pilah sampah
                    </Text>
                    <Text fontSize={"14"} color={"white"}>
                      20 Poin
                    </Text>
                  </Box>
                </HStack>
              </Pressable>
              <Pressable
                _pressed={{ opacity: 0.5 }}
                w={"100%"}
                h={"145px"}
                bgColor={"#375F56"}
                sat
                rounded={"15"}
                shadow={3}
              >
                <HStack space={4} alignItems={"center"} flex={"2"}>
                  <Box flex={"0.8"}>
                    <Image
                      source={require("../../../../assets/images/user/pilah.png")}
                      alt="Gambar"
                      h={"145px"}
                      roundedBottomLeft={"15"}
                      roundedTopLeft={"15"}
                    />
                  </Box>
                  <Box flex={"1.2"}>
                    <Text bold fontSize={"20"} color={"white"}>
                      Pilah sampah
                    </Text>
                    <Text fontSize={"14"} color={"white"}>
                      20 Poin
                    </Text>
                  </Box>
                </HStack>
              </Pressable>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
