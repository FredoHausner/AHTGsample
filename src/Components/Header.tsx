import React from "react";
import {Platform} from "react-native";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {Icons} from "../Icons";

export const Header = ({
  navigation,
  title,
}: {
  navigation?: any;
  title: string;
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.backButtonWrapper}>
        {navigation && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}
          >
            <Icons.Arrow size={25} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: Platform.OS === "ios" ? "10%" : 0,
  },

  backButtonWrapper: {
    width: "20%",
    height: "100%",
  },

  backButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  titleWrapper: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    color: "#393d3f",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
