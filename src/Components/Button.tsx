import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";

export const Button = ({name, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 25,
        height: 40,
        marginTop: "15%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "grey",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  name: string;
  onPress: () => void;
}
