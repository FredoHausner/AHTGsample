import React, {useState, useEffect} from "react";
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Icons} from "../Icons";

export const RatingInput = ({
  rating,
  changeRating,
}: {
  rating: number;
  changeRating: (rating: number) => void;
}) => {
  const [hospitalRating, setHospitalRating] = useState<number>(1);

  useEffect(() => {
    setHospitalRating(rating);
  }, []);

  const StarButton = ({rating}: {rating: number}) => {
    return (
      <TouchableWithoutFeedback
        onPressIn={() => {
          setHospitalRating(rating);
          changeRating(rating);
        }}
      >
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
          }}
        >
          <Icons.Star
            fillColor={hospitalRating >= rating ? "#ffa500" : "#ededed"}
            size={40}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.wrapper}>
      <StarButton rating={1} />
      <StarButton rating={2} />
      <StarButton rating={3} />
      <StarButton rating={4} />
      <StarButton rating={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
    marginTop: "5%",
    flexDirection: "row",
  },
});
