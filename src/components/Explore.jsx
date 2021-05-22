import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
export default function Explore(props) {
  var [country, setCountry] = useState({})
  var [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${props.path}`)
    .then(Response => Response.json())
    .then(data => {
      setCountry(data)
      setLoading(false)
      props.setRegion('all')
    })
   
  }, [props.path, props])
  
  return (
     loading? 
     <div className="loader"> <h1>Loading<span id="s1">.</span><span id="s2">.</span><span id="s3">.</span></h1></div>
      :<>
      <div className="back">
        <Link to="/">
        {'<- Back'}

        </Link>
      </div>
     <div className="exp-container" style= {{display: 'flex' , flexDirection: 'row',}}>
      <img 
        src={country.flag} alt="" />
    <div className="detail1">
    <h2> 
        {country.name} ({country.altSpellings? country.altSpellings[1] : null})
      </h2>
      
      <h5>
        Native Name: {country.nativeName}
      </h5>

      <h5>Demonym: {} 
        <span>
        {country.demonym}
        </span> 
      </h5>

      <h5>Capital: {}
        <span>
        {country.capital}
        </span> 
      </h5>

      <h5>Region: {} 
        <span> 
         {country.region} ({country.subregion})
        </span> 
        </h5>

      <h5>Area: {}
         <span>
         {country.area}
        </span> 
      </h5>

      <h5>Population: {}
         <span>
         {country.population} 
        </span>
      </h5>

      <h5>Time Zone: {}
        <span>
          {country.timezones? country.timezones[0] : null}
        </span> 
      </h5>
    </div>

    <div className="detail2">
    {
        country.callingCodes? <h5>Calling Code: <span>{country.callingCodes[0]}</span> </h5>
        :null
      }

      {country.currencies? 
         <h5> <strong>Currency: </strong> 

          <span> {country.currencies[0].code} </span>
          <span> ({country.currencies[0].name}), </span>
          <span> [ {country.currencies[0].symbol} ]</span>

        </h5> : null

      }

      {country.borders?<h5>Borders: 
             {
             country.borders.map((b,i) => 
              <span key={i}> {b}, </span>
             )
             }
           </h5> : null}  

           {
             country.languages? <h5>Languages: 
                {country.languages.map((lang,i) => 
               <span key={i} > {lang.name}, </span>
               )}
             </h5>
             : null
           }
    </div>
     

     
    </div>
    </>
  )
}
