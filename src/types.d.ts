export interface AllCountries {
  name: string;
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
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: object;
  flags:{
    png: string,
    svg: string,
  }
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
  translations: {
    es : string
  }
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
