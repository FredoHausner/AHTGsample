import React, {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import * as HospitalService from "../../Services/hospitalService";
import {Header} from "../../Components/Header";
import {HospitalInterface} from "../../Interfaces";
import {SearchBar} from "../../Components/SearchBar";
import {HospitalItem} from "../../Components/HospitalItem";
import {Icons} from "../../Icons";

export const HomePage = ({navigation}) => {
  const [hospitals, setHospitals] = useState<HospitalInterface[]>([]);
  const [search, setSearch] = useState<string>("");
  const focus = useIsFocused();

  useEffect(() => {
    if (focus) {
      HospitalService.get_hospitals().then((res) => {
        setHospitals(res);
      });
    }
  }, [focus]);

  const deleteItem = (id: number) => {
    HospitalService.delete_hospital(id).then((res) => {
      setHospitals(res);
    });
  };

  const navigateToEditPage = (id: number) => {
    let selectedHospital = hospitals.filter((hospital) => hospital.id === id);
    navigation.navigate("EditPage", {
      selectedHospital: selectedHospital[0],
    });
  };

  const navigateToCreatePage = () => {
    navigation.navigate("CreatePage");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Hospitals" />
      <SearchBar value={search} onChange={setSearch} />
      <View style={styles.hospitalListWrapper}>
        <ScrollView
          bounces={true}
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "25%",
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {hospitals.map(({id, name, state, rating, color}, i) => {
            if (
              name.toLowerCase().includes(search.toLowerCase()) ||
              state.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <HospitalItem
                  key={id}
                  id={id}
                  name={name}
                  state={state}
                  rating={rating}
                  color={color}
                  darkBackground={i % 2 === 0}
                  deleteItem={() => {
                    deleteItem(id);
                  }}
                  editItem={() => {
                    navigateToEditPage(id);
                  }}
                />
              );
            }
          })}
        </ScrollView>
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={navigateToCreatePage}
        >
          <Icons.Plus size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  hospitalListWrapper: {
    flex: 1,
    width: "100%",
  },

  addItemButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "white",
    bottom: "5%",
    right: "8%",

    shadowColor: "#000",
    borderWidth: 1,
    borderColor: "lightgrey",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
});
