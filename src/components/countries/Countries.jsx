import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'



const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        console.log("cliked");
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <h3>Visited Country: {visitedCountry.length}</h3>

            <div>
                <ol>
                    {
                        visitedCountry.map(country => <li key={countries.flags}>{country.name.common}</li>)
                    }
                </ol>
            </div>

            <div className="country-container">
            {
                countries.map(country =>  <Country key={country.flags}
                    handleVisitedCountry={handleVisitedCountry}
                    country={country}></Country>)
            }
            </div>
          
           
        </div>
    );
};

export default Countries;