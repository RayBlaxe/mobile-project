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

export default function TabelTantangan() {
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
            Data Tantangan
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
            <VStack space={6}>
              <HStack space={"4"} alignItems={"center"}>
                <Box flex={"1"}>
                  <Text textAlign={"center"} bold fontSize={"16"}>
                    Nama
                  </Text>
                </Box>
                <Box flex={"1"}>
                  <Text textAlign={"center"} bold fontSize={"16"}>
                    Alamat
                  </Text>
                </Box>

                <Box flex={"1"} alignItems={"center"}>
                  <Text textAlign={"center"} bold fontSize={"16"}>
                    Aksi
                  </Text>
                </Box>
              </HStack>
              <Divider />
              <HStack space={"4"} alignItems={"center"}>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Karyn
                  </Text>
                </Box>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Jl. Kaliurang, Yogyakarta
                  </Text>
                </Box>
                <HStack flex={"1"} alignItems={"center"} space={"1"}>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"green.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Edit
                    </Text>
                  </Pressable>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"red.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Hapus
                    </Text>
                  </Pressable>
                </HStack>
              </HStack>
              <HStack space={"4"} alignItems={"center"}>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Karyn
                  </Text>
                </Box>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Jl. Kaliurang, Yogyakarta
                  </Text>
                </Box>
                <HStack flex={"1"} alignItems={"center"} space={"1"}>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"green.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Edit
                    </Text>
                  </Pressable>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"red.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Hapus
                    </Text>
                  </Pressable>
                </HStack>
              </HStack>
              <HStack space={"4"} alignItems={"center"}>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Karyn
                  </Text>
                </Box>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Jl. Kaliurang, Yogyakarta
                  </Text>
                </Box>
                <HStack flex={"1"} alignItems={"center"} space={"1"}>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"green.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Edit
                    </Text>
                  </Pressable>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"red.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Hapus
                    </Text>
                  </Pressable>
                </HStack>
              </HStack>
              <HStack space={"4"} alignItems={"center"}>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Karyn
                  </Text>
                </Box>
                <Box flex={"1"}>
                  <Text textAlign={"center"} fontSize={"14"}>
                    Jl. Kaliurang, Yogyakarta
                  </Text>
                </Box>
                <HStack flex={"1"} alignItems={"center"} space={"1"}>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"green.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Edit
                    </Text>
                  </Pressable>
                  <Pressable
                    _pressed={{ opacity: 0.5 }}
                    bgColor={"red.900"}
                    px={"2"}
                    py={"1"}
                    rounded={"8"}
                  >
                    <Text bold fontSize={"14"} color={"white"}>
                      Hapus
                    </Text>
                  </Pressable>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
