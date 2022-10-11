import React from "react";
import {Picker} from "@react-native-picker/picker";

export const OptionSelector = ({
  width,
  fontSize,
  optionsArray,
  selectedOption,
  onScroll,
}: OptionSelectorInterface) => {
  return (
    <Picker
      selectedValue={selectedOption}
      style={{
        width,
      }}
      onValueChange={(value, index) => {
        onScroll(value, index);
      }}
      itemStyle={{
        fontSize,
      }}
    >
      {optionsArray.map((item, i) => {
        return <Picker.Item key={i} label={item} value={item} />;
      })}
    </Picker>
  );
};

interface OptionSelectorInterface {
  width: string | number;
  fontSize: number;
  optionsArray: string[];
  selectedOption: string;
  onScroll: (value: string, index: number) => void;
}
