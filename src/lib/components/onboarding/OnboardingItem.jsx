import { Box, Image, StatusBar, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";

const OnboardingItem = ({ item }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Box
      mt="9"
      flex="1"
      justifyContent="center"
      alignItems="center"
      w={width}
      h={height}
      px="6"
    >
      <Box>
        <StatusBar barStyle="dark-content" />
      </Box>
      <Box flex={2} alignItems="center">
        <Image
          w="150"
          h="150"
          source={require("../../../../assets/images/onboarding/c4c-logo.png")}
          alt="gambar sungai"
          alignItems
        />

        {/* <Text color="#4c892c" mt="-2" textAlign="center">
          Challenge for change
        </Text> */}
      </Box>

      <Image
        source={item.image}
        alt={item.title}
        style={styles.image}
        resizeMode="contain"
      />

      <Box flex={4}>
        <Text
          textAlign="center"
          color="gray.900"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="0.75"
        >
          {item.title}
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1"
          color="gray.500"
          fontSize="15"
          mt="2"
        >
          {item.description}
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 3.75,
    marginVertical: 16,
    justifyContent: "center",
  },
});

export default OnboardingItem;
