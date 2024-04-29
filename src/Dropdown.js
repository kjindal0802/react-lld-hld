import React, { useState } from "react";

const cities = [
  {
    name: "India",
    code: "IN",
    cities: ["Ellenabad", "New Delhi"],
  },
  {
    name: "USA",
    code: "US",
    cities: ["Texas", "New York"],
  },
  {
    name: "Norway",
    code: "NY",
    cities: ["Oslo", "Rexjuoik"],
  },
];

export default function App() {
  const [parentCountry, setParentCountry] = useState(cities[0].value);
  const [childCity, setChildCity] = useState([]);

  const handleMainOptionChange = ({ target: { value } }) => {
    setParentCountry(value);
    let options = cities.filter(({ code }) => code === value)[0]?.cities;
    console.log(options);
    setChildCity(options);
  };

  return (
    <>
      <select onChange={handleMainOptionChange} value={parentCountry}>
        {cities.map(({ name, code }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
      <select>
        {childCity.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}
