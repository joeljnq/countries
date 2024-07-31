export interface AllCountries {
  name: {
    common: string;
    official: string;
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unmember: boolean;
  currencies: object;
  idd: object;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: object;
  translations: {
    spa:{
      official: string;
      common: string;
    }
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: object;
  flag: string;
  maps: object;
  population: number;
  car: object;
  timezones: string[];
  continents: string[];
  flags: {
    png: string
    svg: string
    alt: string
  };
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo: object;
}

export interface CountryNames {
  eng: string;
  spa: string;
}

export interface FilteredCountryNames {
  eng: string;
}
