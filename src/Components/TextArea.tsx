import React, {useState} from "react";
import {TouchableOpacity, StyleSheet, TextInput, Animated} from "react-native";

export const TextArea = ({placeholder, value, onChange}: TextAreaInterface) => {
  const inputRef = React.createRef<TextInput>();

  const [textAnimation, setTextAnimation] = useState(new Animated.Value(0));
  const [showAnimation, setShowAnimation] = useState(false);

  Animated.timing(textAnimation, {
    toValue: showAnimation || value ? 0 : 30,
    duration: 200,
    useNativeDriver: false,
  }).start();

  return (
    <TouchableOpacity
      style={styles.touchableWrapper}
      onPress={() => {
        inputRef.current.focus();
      }}
    >
      <TextInput
        allowFontScaling={false}
        ref={inputRef}
        value={value}
        style={styles.textInput}
        autoCapitalize="none"
        blurOnSubmit={true}
        onBlur={() => {
          if (!value) {
            setShowAnimation(false);
          }
        }}
        onChangeText={onChange}
      />
      {placeholder && (
        <Animated.Text
          style={[styles.placeholderText, {top: textAnimation}]}
          allowFontScaling={false}
        >
          {placeholder}
        </Animated.Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    width: "80%",
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1.2,
    borderColor: "#c3c3c3",
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    width: "90%",
    textAlign: "center",
    color: "#393d3f",
    fontWeight: "500",
    fontSize: 13,
  },
  placeholderText: {
    position: "absolute",
    left: 0,
    fontSize: 9,
    fontWeight: "500",
    color: "#686868",
  },
});

interface TextAreaInterface {
  placeholder: string;
  value: string;
  onChange: (e) => void;
}
