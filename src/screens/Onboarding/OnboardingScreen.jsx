import { Box, FlatList, HStack, Text } from "native-base";
import { Animated } from "react-native";
import { useState, useRef } from "react";

import slides from "./slides";
import OnboardingItem from "../../lib/components/onboarding/OnboardingItem";
import { Paginator } from "../../lib/components/onboarding/Paginator";
import FullButton from "../../lib/components/FullButton";

const Onboarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const continueSlide = () => {
    if (currentIndex < 3) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("login");
    }
  };

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <Box flex="1" justifyContent="center" alignItems="center">
      <Box flex="3">
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </Box>

      <Paginator data={slides} scrollX={scrollX} />

      <HStack>
        <FullButton innerProps={{ mb: "8" }} onPress={continueSlide}>
          {currentIndex !== 3 ? "Selanjutnya" : "Mulai"}
        </FullButton>
        
      </HStack>
    </Box>
  );
};

export default Onboarding;
