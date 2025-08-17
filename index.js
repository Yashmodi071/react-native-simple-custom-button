import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  onPress,
  backgroundColor = "#007BFF",
  borderColor = "#007BFF",
  height = 50,
  width = "80%",
  borderRadius = 10,
  textColor = "#fff",
  fontSize = 16,
  fontWeight = "600",
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor,
          height,
          width,
          borderRadius,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: textColor,
            fontSize,
            fontWeight,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
  },
});

export default CustomButton;
