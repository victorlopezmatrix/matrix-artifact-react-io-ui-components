import React from "react";
import { Text } from "react-native";
import type {TextProps} from "react-native";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export const Title: React.FC<TextProps> = (props) => {
  return <Text {...props}/>;
}