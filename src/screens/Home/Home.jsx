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

export default function Home() {
  return (
    <Box>
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <Box mx={6}>
        <HStack alignItems="center" space={2}>
          <Avatar source={require("../../../assets/images/home/rachel.png")} />
          <Center ml="2">
            <VStack>
              <Text fontSize="30" color="gray.900" fontFamily="Poppins-Bold">
                Hanna Junnita
              </Text>
              <Text fontFamily="Poppins" color="gray.400">
                Mitra
              </Text>
            </VStack>
          </Center>
        </HStack>

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
                w="16"
                h="16"
                source={require("../../../assets/images/home/sampah.png")}
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
                w="16"
                h="16"
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
                w="16"
                h="16"
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
                w="16"
                h="16"
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
