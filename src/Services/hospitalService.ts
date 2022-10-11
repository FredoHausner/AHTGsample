import {HospitalInterface} from "../Interfaces";
module.exports = new (function () {
  const colorArray: string[] = [
    "#ACDDDE",
    "#CAF1DE",
    "#E1F8DC",
    "#FEF8DD",
    "#FFE7C7",
    "#F7D8BA",
  ];
  let hospitals: HospitalInterface[] = [
    {
      id: 1,
      name: "University of Utah Hospital",
      state: "Utah",
      rating: 5,
    },
    {
      id: 2,
      name: "Hunstville Hospital",
      state: "Alabama",
      rating: 4,
    },
    {
      id: 3,
      name: "Alaska Native Medical Center",
      state: "Alaska",
      rating: 4,
    },
    {
      id: 4,
      name: "Mayo Click-Phoenix",
      state: "Arizona",
      rating: 5,
    },
    {
      id: 5,
      name: "UCLA Medical Center",
      state: "California",
      rating: 4,
    },
    {
      id: 6,
      name: "Emory University Hospital",
      state: "Georgia",
      rating: 3,
    },
    {
      id: 7,
      name: "St. Luke's Regional",
      state: "Idaho",
      rating: 1,
    },
    {
      id: 8,
      name: "University of Washington Medical Center",
      state: "Washington",
      rating: 5,
    },
  ];
  this.get_hospitals = async (): Promise<HospitalInterface[]> => {
    hospitals.map((hospital) => {
      if (!hospital.color) {
        hospital.color =
          colorArray[Math.floor(Math.random() * colorArray.length)];
      }
    });
    return hospitals;
  };

  this.create_hospital = async (
    id: number,
    name: string,
    state: string,
    rating: number
  ) => {
    hospitals.push({
      id,
      name,
      state,
      rating,
      color: colorArray[Math.floor(Math.random() * colorArray.length)],
    });
  };

  this.edit_hospital = async (
    id: number,
    name: string,
    state: string,
    rating: number
  ) => {
    let hospitalIndex = hospitals.findIndex((hospital) => hospital.id === id);
    hospitals[hospitalIndex] = {
      ...hospitals[hospitalIndex],
      name,
      state,
      rating,
    };
  };

  this.delete_hospital = async (id: number): Promise<HospitalInterface[]> => {
    hospitals = hospitals.filter((hospital) => hospital.id !== id);
    return hospitals;
  };
})();
export function get_hospitals(): Promise<HospitalInterface[]> {
  throw new Error("Function not implemented.");
}

export function create_hospital(
  id: number,
  name: string,
  state: string,
  rating: number
) {
  throw new Error("Function not implemented.");
}

export function edit_hospital(
  id: number,
  name: string,
  state: string,
  rating: number
) {
  throw new Error("Function not implemented.");
}

export function delete_hospital(id: number): Promise<HospitalInterface[]> {
  throw new Error("Function not implemented.");
}
