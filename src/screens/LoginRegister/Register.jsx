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
  CheckIcon,
} from "native-base";
import { Select } from "native-base";
import NavBar from "../../lib/components/Navbar";
import HalfButton from "../../lib/components/Home/HalfButton";

export default function Home({navigation}) {
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
        ></Box>
      </Box>

      <Box
        position="absolute"
        mt={"4"}
        top={5}
        safeArea
        p="20px"
        py="8"
        w="100%"
        bgColor={"white"}
        mx={"40"}
        borderTopRadius={"3xl"}
      >
        <Heading
          size="lg"
          bold
          fontWeight="600"
          color="#6fa956"
          alignSelf={"center"}
        >
          Daftar akun
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
          alignSelf={"center"}
        >
          Kebaikan harus dimulai dari sekarang
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Nama</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Role</FormControl.Label>
            <Select
              placeholder="Select role"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={4} />,
              }}
            >
              <Select.Item label="Admin" value="admin" />
              <Select.Item label="User" value="user" />
              <Select.Item label="Partner" value="partner" />
            </Select>
            
          </FormControl>

          <Button mt="1" colorScheme={"emerald"}>
            Sign Up
          </Button>
          <HStack justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already have an account?{" "}
            </Text>
            <Link
              _text={{
                color: "#6fa956",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.goBack()}
            >
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
