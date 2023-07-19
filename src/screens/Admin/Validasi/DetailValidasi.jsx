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
            Validasi Sampah
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
        mx={"6"}
        rounded={"3xl"}
        pb={"4"}
        overflow={"hidden"}
      >
        <Image
          source={require("../../../../assets/images/user/pilah.png")}
          alt="Gambar"
        />
        <VStack>
          <HStack mx={"4"} mt={"4"} alignItems={"flex-start"}>
            <Text bold fontSize={"16"}>
              Nama
            </Text>
            <Spacer />
            <Text
              fontSize={"16"}
              textAlign={"right"}
              color={"gray.500"}
              maxW={"48"}
            >
              Karyn
            </Text>
          </HStack>
          <HStack mx={"4"} mt={"4"} alignItems={"flex-start"}>
            <Text bold fontSize={"16"}>
              Tanggal
            </Text>
            <Spacer />
            <Text
              fontSize={"16"}
              textAlign={"right"}
              color={"gray.500"}
              maxW={"48"}
            >
              17:00, 12 Dec 2021
            </Text>
          </HStack>
          <HStack mx={"4"} mt={"4"} alignItems={"flex-start"}>
            <Text bold fontSize={"16"}>
              Jenis sampah
            </Text>
            <Spacer />
            <Text
              fontSize={"16"}
              textAlign={"right"}
              color={"gray.500"}
              maxW={"48"}
            >
              Sampah Plastik
            </Text>
          </HStack>
          <HStack mx={"4"} mt={"4"} alignItems={"flex-start"}>
            <Text bold fontSize={"16"}>
              Total berat
            </Text>
            <Spacer />
            <Text
              fontSize={"16"}
              textAlign={"right"}
              color={"gray.500"}
              maxW={"48"}
            >
              5 Kg
            </Text>
          </HStack>

          <HStack mx={"4"} mt={"4"} alignItems={"flex-start"}>
            <Text bold fontSize={"16"}>
              Drop point
            </Text>
            <Spacer />
            <Text
              fontSize={"16"}
              textAlign={"right"}
              color={"gray.500"}
              maxW={"48"}
            >
              Jl. Raya Bogor KM 30, Jakarta Timur
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box mx={"6"} mt={"8"}>
        <HStack>
          <Pressable
            w={"32"}
            bgColor={"white"}
            p={"2"}
            px={"2"}
            rounded={"16"}
            _pressed={{ opacity: 0.5 }}
          >
            <Center>
              <Text bold>Back</Text>
            </Center>
          </Pressable>
          <Spacer />
          <Pressable
            w={"32"}
            bgColor={"white"}
            p={"2"}
            px={"2"}
            rounded={"16"}
            _pressed={{ opacity: 0.5 }}
          >
            <Center>
              <Text bold>Accept</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
}
