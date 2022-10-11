import React from "react";
import {View, StyleSheet} from "react-native";
import {Icons} from "../Icons";

export const Rating = ({rating}: {rating: number}) => {
  return (
    <View style={styles.wrapper}>
      {new Array(rating).fill("").map((item, i) => (
        <Icons.Star key={i} fillColor="#ffa500" size={15} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
  },
});
