import React from "react";
import { Box, StatusBar, Text, HStack, Button, Spacer,Avatar,Center,VStack } from "native-base";
import NavBar from "../../lib/components/Navbar";
import HalfButton from "../../lib/components/Home/HalfButton";


export default function Home() {
  return (
    <Box>
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <Box mx={6}>
      <HStack alignItems="center" space={2}>
      <Avatar source={require("../../../assets/images/home/rachel.png")}/>
              <Center ml="2">
                <VStack>
                  <Text
                    fontSize="16"
                    color="gray.900"
                    fontFamily="Poppins-Bold"
                  >
                    Hanna Junnita
                  </Text>
                  <Text fontFamily="Poppins" color="gray.400">
                    Selamat datang kembalia
                  </Text>
                </VStack>
              </Center>
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
          <Box>
            {/* <Button size="sm" style={{backgroundColor:"#6fa956"}}>PRIMARY</Button> */}
            <HalfButton>PRIMARY</HalfButton>
          </Box>
          <Spacer />
          <Box>
            <HalfButton>SECONDARY</HalfButton>
          </Box>
          
        </HStack>
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
}
