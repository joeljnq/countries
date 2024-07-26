import React, { useEffect, useState } from "react";
interface TextBoxProps {
  countryNames:
    | {
        eng: string;
        spa: string;
      }[]
    | null;
}

interface CountryNames {
  eng: string;
  spa: string;
}

const TextBox: React.FC<TextBoxProps> = ({ countryNames }) => {
  const [inputText, setInputText] = useState<string>('');
  const [filteredCountryNames, setFilteredCountryNames] = useState<string[]>([]);
  useEffect(() => {
    if (countryNames && inputText.length > 0) {
      const filteredNames: CountryNames[] = countryNames.filter(
        (countryNames) =>
          countryNames.spa.toLowerCase().includes(inputText.toLowerCase()) ||
          countryNames.eng.toLowerCase().includes(inputText.toLowerCase())
      );
      console.log(filteredNames);

      setFilteredCountryNames(filteredNames.map((country) => country.eng));
    }

  }, [inputText, countryNames]);

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {filteredCountryNames
        ? filteredCountryNames.map((country) => {
            return (
              <div key={country}>
                <p>{country}</p>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default TextBox;
