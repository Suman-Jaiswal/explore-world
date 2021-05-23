import React from 'react';
import './card.css';
import {Link} from 'react-router-dom'

export default function Card(props) {

  const handleClick = (e) => {
    props.setPath(props.country.alpha3Code);  
    // document.body.scrollTop = 0
    // document.documentElement.scrollTop = 0 
  }
   

  return (
    <div className="card-container"  style={{
      backgroundColor: props.darkTheme? 'black':'rgb(243, 230, 230)'
    }}>
        <img 
        style={{height: '55%', width: 'inherit', size: 'inherit', marginBottom: '15px'}}
        src={props.country.flag} alt="" />

        <h4 id="name"> {props.country.name} </h4> 

        <h4> <strong>Capital: </strong> {props.country.capital}</h4>

        <h4> <strong>Region: </strong> {props.country.region}</h4>

        <h4> <strong>Population: </strong> {props.country.population}</h4>

        <h4> <strong>Area: </strong> {props.country.area}</h4> 

       <Link to="/explore"> <button onClick={handleClick} className="btn">Explore</button></Link>

    </div>
  )
}

