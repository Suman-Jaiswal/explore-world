import React from 'react';
import './card.css';
import {Link} from 'react-router-dom'

export default function Card(props) {

  const handleClick = (e) => {
    props.setPath(props.country.alpha3Code);   
  }

  return (
    <div className="card-container" >
        <img 
        style={{height: '55%', width: 'inherit', size: 'inherit', border: '1px solid rgba(0,0,0,.2)', marginBottom: '15px'}}
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

