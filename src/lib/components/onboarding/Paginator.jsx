import { View } from "native-base"
import { StyleSheet, Animated, useWindowDimensions } from "react-native"

export const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions()

  return (
    <View flexDirection="row" height="8">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 12, 6],
          extrapolate: "clamp",
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        })

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          ></Animated.View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 6,
    borderRadius: 5,
    backgroundColor: "#000000",
    marginHorizontal: 4,
  },
})
