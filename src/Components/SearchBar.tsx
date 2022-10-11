import React from "react";
import {TouchableOpacity, View, StyleSheet, TextInput} from "react-native";
import {Icons} from "../Icons";

export const SearchBar = ({value, onChange}: SearchBarInterface) => {
  const inputRef = React.createRef<TextInput>();

  return (
    <TouchableOpacity
      style={styles.touchableWrapper}
      onPress={() => {
        inputRef.current.focus();
      }}
    >
      <View
        style={{
          height: "100%",
          width: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icons.Search size={20} fillColor="grey" />
      </View>
      <TextInput
        allowFontScaling={false}
        ref={inputRef}
        value={value}
        style={styles.textInput}
        autoCapitalize="none"
        blurOnSubmit={true}
        onChangeText={onChange}
      />
      {value && (
        <TouchableOpacity
          style={{
            height: "100%",
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            onChange("");
          }}
        >
          <Icons.Cancel size={15} fillColor="darkgrey" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    width: "85%",
    height: 40,
    flexDirection: "row",
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: "darkgrey",
  },
  textInput: {
    width: "70%",
    height: "100%",
    color: "#393d3f",
    fontWeight: "500",
    fontSize: 18,
  },
});

interface SearchBarInterface {
  value: string;
  onChange: (e) => void;
}
