import React from "react";
import { FilteredCountryNames, AllCountries } from "./types";
import "./assets/countryInfo.css";
interface CountryInfoProps {
  filteredCountryNames: FilteredCountryNames[];
  allCountries: AllCountries[];
}

const CountryInfo: React.FC<CountryInfoProps> = ({
  filteredCountryNames,
  allCountries,
}) => {
  const filteredCountries: AllCountries[] = allCountries.filter((country) =>
    filteredCountryNames.some(
      (filteredCountry) => filteredCountry.eng === country.name.common
    )
  );
  console.log(filteredCountries);

  return (
    <div id="wrapper">
      {filteredCountries.map((country, index) => {
        return (
          <div key={index} id="country-wrapper">
            <div  id="headline">
              <div> 
          
              </div>
            <img src={country.flags.png} alt="flag" id="flag" />

            </div>
            <h3>{country.name.common}</h3>
            <div  id="info">
              <p>Population: {country.population}</p>
              <p>Capital: {country.capital}</p>
              <p>Region: {country.region}</p>           
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryInfo;
