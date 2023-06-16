import React from "react";
import { Box, StatusBar, Text, HStack,Button } from "native-base";
import NavBar from "../../lib/components/Navbar";

export default function Home() {
  return (
    <Box>
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <Box bgColor={"green.300"}>
        <HStack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "column",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button size="sm">PRIMARY</Button>
          <Button size="sm" colorScheme="secondary">
            SECONDARY
          </Button>
        </HStack>
      </Box>
      <Text>Ini adalah halaman Rumah</Text>
    </Box>
  );
}
