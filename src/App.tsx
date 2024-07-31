import { useEffect, useState } from 'react'
import './App.css'
import TextBox from './TextBox'
import { AllCountries, CountryNames, FilteredCountryNames } from './types'
import CountryInfo from './CountryInfo'
import Filter from './Filter'


function App() {
  
  const [fullCountryNames, setFullCountryName] = useState<CountryNames[] | null>(null)
  const [filteredCountryNames, setFilteredCountryNames] = useState<FilteredCountryNames[] >([]);
  const [allCountries, setAllCountries] = useState<AllCountries[]>([])
  const [filter, setFilter] = useState <string>('');
  console.log(filter);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => {
      
      if (res.length > 0) {
        setFullCountryName(res.map((country : AllCountries) =>  ({eng:country.name.common, spa:country.translations.spa.common}) ))
        setAllCountries(res)
      }
      
    } )
  },[])
    
  
  return (
    
    <>
    <h1>Countries</h1>
    <TextBox fullCountryNames ={fullCountryNames ? fullCountryNames : []} filteredCountryNames={filteredCountryNames} onFilteredCountryNames={setFilteredCountryNames} />
    <Filter onChangeFilter={setFilter}></Filter>
    <CountryInfo filteredCountryNames={filteredCountryNames} allCountries={allCountries} filter={filter} />
    </>
  )
}

export default App
