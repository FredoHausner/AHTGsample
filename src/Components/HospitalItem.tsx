import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {Icons} from "../Icons";
import {HospitalInterface} from "../Interfaces";
import {ActionButton} from "./ActionButton";
import {Rating} from "./Rating";

export const HospitalItem = ({
  id,
  name,
  state,
  rating,
  color,
  darkBackground,
  deleteItem,
  editItem,
}: props) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <View
          style={{
            width: "40%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ActionButton name="delete" onPress={deleteItem} color="#ad5049" />
          <ActionButton name=" edit " onPress={editItem} color="#414141" />
        </View>
      )}
    >
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: darkBackground ? "white" : "#f9f9f9",
        }}
      >
        <View style={styles.iconWrapper}>
          <View
            style={{
              ...styles.iconBackground,
              backgroundColor: color,
            }}
          >
            <Icons.Hospital size={45} />
          </View>
        </View>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.titleText}>
            {name}
          </Text>
          <Text style={styles.stateText}>{state}</Text>
          <Rating rating={rating} />
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
  },

  iconWrapper: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  iconBackground: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  textWrapper: {
    width: "65%",
    height: "65%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  titleText: {
    fontSize: 18,
    fontWeight: "600",
  },
  stateText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

interface props extends HospitalInterface {
  darkBackground?: boolean;
  deleteItem: () => void;
  editItem: () => void;
}
