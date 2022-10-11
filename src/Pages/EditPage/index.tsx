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

export const EditPage = ({navigation, route}) => {
  const [id, setId] = useState<number>();
  const [name, setName] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [rating, setRating] = useState<number>();

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

  const updateHospital = () => {
    if (name && state && rating) {
      HospitalService.edit_hospital(id, name, state, rating);
    }
    navigation.pop();
  };

  useEffect(() => {
    setId(route.params.selectedHospital.id);
    setName(route.params.selectedHospital.name);
    setState(route.params.selectedHospital.state);
    setRating(route.params.selectedHospital.rating);
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Header navigation={navigation} title="Edit Hospital" />
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
        <RatingInput
          rating={rating || route.params.selectedHospital.rating}
          changeRating={setRating}
        />
        <Button name="update" onPress={updateHospital} />
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
