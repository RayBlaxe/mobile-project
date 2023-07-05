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
} from "native-base";
import NavBar from "../../lib/components/Navbar";
import HalfButton from "../../lib/components/Home/HalfButton";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
} from "react-native";

const statusBarHeight = RNStatusBar.currentHeight;

export default function Home() {
  return (
    <Box>
      <StatusBar barStyle="dark-content" />
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
              source={require("../../../assets/icon.png")}
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
                bg="purple.600"
                justifyContent="center"
                alignItems="center"
                rounded="full"
              >
                <Text fontSize="10" color="white">
                  1
                </Text>
              </Box>
              <Image
                w="12"
                h="12"
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

      <NavBar />
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
              justifyContent="center"
              _pressed={{ opacity: 0.5 }}
              mr={4}
            >
              <Box
                zIndex="1"
                position="absolute"
                top="-12"
                right="-10"
                w="8"
                h="8"
                bg="green.600"
                justifyContent="center"
                alignItems="center"
                rounded="full"
              >
                <Text fontSize="14" color="white">
                  1
                </Text>
              </Box>
              <Image
                w="12"
                h="12"
                source={require("../../../assets/images/home/sampah.png")}
                alt="gambar sungai"
              />
            </Pressable>
            <Pressable
              position="relative"
              justifyContent="center"
              _pressed={{ opacity: 0.5 }}
              mr={4}
              bgColor={"gray.500"}
            >
              <Image
                w="12"
                h="12"
                source={require("../../../assets/images/home/history.png")}
                alt="gambar sungai"
              />
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
              justifyContent="center"
              _pressed={{ opacity: 0.5 }}
              mr={4}
            >
              <Image
                w="12"
                h="12"
                source={require("../../../assets/images/home/user.png")}
                alt="gambar sungai"
              />
            </Pressable>
            <Pressable
              position="relative"
              justifyContent="center"
              _pressed={{ opacity: 0.5 }}
              mr={4}
            >
              <Image
                w="12"
                h="12"
                source={require("../../../assets/images/home/history.png")}
                alt="gambar sungai"
              />
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
