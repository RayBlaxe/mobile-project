import React from "react";
import {
  Box,
  Text,
  HStack,
  StatusBar,
  IconButton,
  useBreakpointValue,
  Avatar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function NavBar() {
  const maxW = useBreakpointValue({ base: "100%", md: "350" }); // Adjust the breakpoint as needed

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box
        bg="green.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW={maxW}
        display="flex"
        flexDirection="row"
      >
        <HStack alignItems="center">
          <IconButton
            icon={<MaterialIcons name="menu" size={24} color="white" />}
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={<MaterialIcons name="notifications" size={24} color="white" />}
          />
                    
          <Avatar source={require("../../../assets/images/home/rachel.png")}/>
        </HStack>
      </Box>
    </>
  );
}

export default NavBar;
