import * as React from "react";
import { TouchableOpacityProps, TextStyle, ViewStyle, DimensionValue } from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  borderColor?: string;
  height?: DimensionValue;
  width?: DimensionValue;
  borderRadius?: number;
  textColor?: string;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  style?: ViewStyle;
  textStyle?: TextStyle;
}

declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
