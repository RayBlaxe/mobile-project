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

export default function DetailPickup({navigation}) {
  const onPickUp = () => {
    Alert.alert(
      "Pick Up",
      "Pick Up Berhasil",
      [
        {
          text: "OK",
          onPress: navigation.goBack(),
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
              Detail Pick Up
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
                <Text textAlign={"center"} bold fontSize={"20"}>
                  Karyn Santoso
                </Text>
                <HStack alignItems={"flex-start"}>
                  <Text fontSize={"14"}>Jenis Sampah</Text>
                  <Spacer />
                  <Text textAlign={"right"} fontSize={"14"}>
                    Plastik
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"}>
                  <Text fontSize={"14"}>Jumlah</Text>
                  <Spacer />
                  <Text textAlign={"right"} fontSize={"14"}>
                    25 Kg
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"}>
                  <Text flex={"1"} fontSize={"14"}>
                    Pick Up Point
                  </Text>
                  <Spacer />
                  <Text textAlign={"right"} flex={"1"} fontSize={"14"}>
                    Jl. Delima, Blok B12, Pekanbaru
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Box
              rounded={"16"}
              overflow={"hidden"}
              bgColor={"white"}
              p={"2"}
              h={"72"}
            >
              <Image
                rounded={"16"}
                source={require("../../../../assets/images/mitra/pilah.png")}
                alt="Gambar"
                resizeMode="cover"
                h={"full"}
              />
            </Box>
            <Pressable _pressed={{opacity:0.5}} rounded={"8"} bgColor={"white"} w={"full"} py={"2"} onPress={onPickUp}>
                <Text bold textAlign={"center"} fontSize={"16"}>
                  Pick Up
                </Text>
            </Pressable>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
