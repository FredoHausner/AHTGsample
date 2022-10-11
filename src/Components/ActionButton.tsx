import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export const ActionButton = ({onPress, name, color}: ActionButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          borderWidth: 1.4,
          paddingVertical: 4,
          paddingHorizontal: 4,
          borderRadius: 4,
          borderColor: color,
        }}
      >
        <Text
          style={{
            color: color,
            textTransform: "uppercase",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {name}
        </Text>
      </View>
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

interface ActionButtonProps {
  onPress: () => void;
  name: string;
  color: string;
}
