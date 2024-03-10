
import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
   const {name, flags, population, capital} = country;

   const [visited, setVisited] = useState(false);
    // console.log(country)

    const handleVisit = ()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h4 style={{color: visited && 'red'}}>Name: {name?.common}</h4>
            <img src={flags?.png} alt="" />
            <div className='div2'>
            <p>Population: {population}</p>
            <p>Capital: {capital} </p>
            </div>

<div>
<button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
</div>
            

            <div className='button'>
            <button onClick={handleVisit}>{visited? "Visited": "Planing"}</button>
            {visited ? "I visited this place" : "I want to visit"}
            </div>
           
           
        </div>
    );
};

export default Country;