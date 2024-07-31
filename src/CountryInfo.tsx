import React, { useEffect, useState } from "react";
import { FilteredCountryNames, AllCountries } from "./types";
import "./assets/countryInfo.css";
interface CountryInfoProps {
  filteredCountryNames: FilteredCountryNames[];
  allCountries: AllCountries[];
  filter: string;
}

const CountryInfo: React.FC<CountryInfoProps> = ({
  filteredCountryNames,
  allCountries,
  filter
}) => {
  const [sortCountries, setSortCountries] = useState<AllCountries[]>([]);
  
 useEffect(() =>{
  const filteredCountries: AllCountries[] = allCountries.filter((country) =>
    filteredCountryNames.some(
      (filteredCountry) => filteredCountry.eng === country.name.common
    )
  );
  if(filter === 'ascend'){
    setSortCountries(filteredCountries.sort())
  }else if(filter === 'descend'){
    setSortCountries(filteredCountries.sort().reverse())
  }else{
    setSortCountries(filteredCountries)
  }
 },[filter,setSortCountries,filteredCountryNames,allCountries])


  return (
    
    <div id="wrapper">
      {sortCountries.map((country, index) => {
        return (
          <div key={index} id="country-wrapper">
            <div  id="headline">
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
