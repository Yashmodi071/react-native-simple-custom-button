import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    DimensionValue,
} from "react-native";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    borderColor?: string;
    height?: DimensionValue; // ✅ number | string
    width?: DimensionValue;  // ✅ number | string
    borderRadius?: number;
    textColor?: string;
    fontSize?: number;
    fontWeight?: TextStyle["fontWeight"];
    style?: ViewStyle;
    textStyle?: TextStyle;
};

const CustomButton: React.FC<CustomButtonProps> = ({
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
