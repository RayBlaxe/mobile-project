import React from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  Button,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Spacer,
  Image,
} from "native-base";
import NavBar from "../../lib/components/Navbar";
import HalfButton from "../../lib/components/Home/HalfButton";

export default function Home() {
  return (
    
    <Center w="100%">
        <StatusBar barStyle="light-content" />
      <Box position="relative">
        <Image
          h={48}
          source={require("../../../assets/images/onboarding/1.jpg")}
          alt={"FotoLogin"}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0, 0, 0, 0.7)" // Adjust the opacity as needed
          alignItems={"center"}
          justifyContent={"center"}
        >
            <Image
          h={"40"}
          w={"40"}
          source={require("../../../assets/images/onboarding/c4c-logo.png")}
          alt={"FotoLogin"}
        />
        </Box>
      </Box>

      <Box safeArea p="2" py="8" w="90%" maxW="290" >
        <Heading
          size="lg"
          bold
          fontWeight="600"
          color="#6fa956"
          alignSelf={"center"}
        >
          Selamat Datang
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
          alignSelf={"center"}
        >
          Login untuk membuat linkungan lebih baik
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "#6fa956",
              }}
              alignSelf="center"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>

          <Button mt="2" colorScheme={"emerald"}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "#6fa956",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
