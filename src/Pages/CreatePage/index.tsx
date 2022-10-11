import React, {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import * as HospitalService from "../../Services/hospitalService";
import {TextArea} from "../../Components/TextArea";
import {OptionSelector} from "../../Components/OptionSelector";
import {RatingInput} from "../../Components/RatingInput";
import {Button} from "../../Components/Button";
import {Header} from "../../Components/Header";

export const CreatePage = ({navigation}) => {
  const [name, setName] = useState<string>("");
  const [state, setState] = useState<string>("Alabama");
  const [rating, setRating] = useState<number>(1);

  const stateArray = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const createHospital = () => {
    if (name && state && rating) {
      HospitalService.create_hospital(Date.now(), name, state, rating);
    }
    navigation.pop();
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Header navigation={navigation} title="Create Hospital" />
        <TextArea
          value={name}
          placeholder={"Name"}
          onChange={(e) => {
            setName(e);
          }}
        />
        <View
          style={{
            width: "80%",
            marginTop: "5%",
          }}
        >
          <Text style={styles.placeholderText}>State</Text>
        </View>
        <OptionSelector
          optionsArray={stateArray}
          selectedOption={state}
          width="75%"
          onScroll={(value, index) => {
            setState(value);
          }}
          fontSize={20}
        />
        <View
          style={{
            width: "80%",
            marginTop: "5%",
          }}
        >
          <Text style={styles.placeholderText}>Rating</Text>
        </View>
        <RatingInput rating={rating} changeRating={setRating} />
        <Button name="create" onPress={createHospital} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  placeholderText: {
    position: "absolute",
    left: 0,
    fontSize: 9,
    fontWeight: "500",
    color: "#686868",
  },
});
