import React from 'react';
import { Box, Text, HStack, StatusBar, IconButton } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

function NavBar() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="green.400" />
      <Box
        bg="green.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
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
            icon={<MaterialIcons name="favorite" size={24} color="white" />}
          />
          <IconButton
            icon={<MaterialIcons name="search" size={24} color="white" />}
          />
          <IconButton
            icon={<MaterialIcons name="more-vert" size={24} color="white" />}
          />
        </HStack>
      </Box>
    </>
  );
}

export default NavBar;