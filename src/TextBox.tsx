import React, { useEffect, useState } from "react";
import { FilteredCountryNames } from "./types";
interface TextBoxProps {
  fullCountryNames: {
    eng: string;
    spa: string;
  }[];
  filteredCountryNames: FilteredCountryNames[];
  onFilteredCountryNames: (filteredNames: FilteredCountryNames[]) => void;
}

interface CountryNames {
  eng: string;
  spa: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  fullCountryNames,
  filteredCountryNames,
  onFilteredCountryNames,
}) => {
  const [inputText, setInputText] = useState<string>("");
  const [localFilteredNames, setLocalFilteredNames] = useState<
    FilteredCountryNames[]
  >([]);
  useEffect(() => {
    if(inputText.length === 0) {
      const newFilteredfountryNames: FilteredCountryNames[] = fullCountryNames.map(
        (country) => ({ eng: country.eng })
      );
      setLocalFilteredNames(newFilteredfountryNames);
    }
    if (fullCountryNames && inputText.length > 0) {
      const filteredNames: CountryNames[] = fullCountryNames.filter(
        (countryNames: CountryNames) =>
          countryNames.spa.toLowerCase().includes(inputText.toLowerCase()) ||
          countryNames.eng.toLowerCase().includes(inputText.toLowerCase())
      );
      const newFilteredCountryNames: FilteredCountryNames[] = filteredNames.map(
        (country) => ({ eng: country.eng })
      );
      setLocalFilteredNames(newFilteredCountryNames);
    } 
  }, [inputText, fullCountryNames]);

  useEffect(() => {

    
    if (
      JSON.stringify(localFilteredNames) !==
      JSON.stringify(filteredCountryNames)
    ) {
      onFilteredCountryNames(localFilteredNames);
    }
  }, [localFilteredNames, filteredCountryNames, onFilteredCountryNames]);

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
    </>
  );
};

export default TextBox;
