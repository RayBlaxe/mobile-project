import React from "react";
import { TouchableOpacity, Text, useWindowDimensions } from "react-native";

const OutlineButton = ({ children, onPress }) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: windowWidth * 0.4,
        // paddingVertical: 12,
        alignSelf: "center",

        backgroundColor: "#007a00",
        paddingVertical: 15,
        borderRadius: 17,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
