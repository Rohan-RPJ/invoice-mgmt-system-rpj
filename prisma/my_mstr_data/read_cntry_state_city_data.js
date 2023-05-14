const dataJsonArr = require("./countries+states+cities.json");
// console.log(typeof dataJsonArr);
// console.log(dataJson[0]);

const ReadCountries_States_Cities_Data = () => {
  let countries = [];
  let states = [];
  let cities = [];

  for (let i in dataJsonArr) {
    // ["India", "United States", "Australia", "Switzerland", "Canada"]
    if (["India"].includes(dataJsonArr[i].name)) {
      let country = {};
      country.id = countries.length + 1;
      country.name = dataJsonArr[i].name;
      country.code = dataJsonArr[i].iso2;
      countries.push(country);
      let statesData = dataJsonArr[i].states;
      for (let j in statesData) {
        let state = {};
        state.id = states.length + 1;
        state.name = statesData[j].name;
        state.code = statesData[j].state_code;
        state.cntry_id = country.id;
        states.push(state);

        let citiesData = statesData[j].cities;
        for (let k in citiesData) {
          let city = {};
          city.id = cities.length + 1;
          city.name = citiesData[k].name;
          city.state_id = state.id;
          city.cntry_id = country.id;
          cities.push(city);
        }
      }
    }
  }

  return {
    countries: countries,
    states: states,
    cities: cities,
  };
};

export default ReadCountries_States_Cities_Data;
// console.log(countries);
// console.log(states);
// console.log(cities);
