import { useEffect, useState } from 'react'
import './App.css'
import TextBox from './TextBox'
import { AllCountries } from './types'

function App() {
  
  const [countryNames, setCountryName] = useState<string[]| null>(null)
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => {
      
      setCountryName(res.map((country : AllCountries) =>  ({eng:country.name.common, spa:country.translations.spa.common}) ))
      
    } )
  },[])
    
  
  return (
    
    <>
    <TextBox countryNames ={countryNames} />
    </>
  )
}

export default App
