import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from './components/Card';
import Explore from './components/Explore';
import './App.css';

function App() {
  var [countries, setCountries] = useState([]);
  var [path, setPath] = useState('');
  var [loading, setLoading] = useState(true)
  var [region, setRegion] = useState('all')
  // var [err, setErr] = useState(false)
 
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/${region}`)
      .then(Response => Response.json())
      .then((data )=> {
        setCountries(data)
        setLoading(false)
  
      }
      )
  
  }, [region])
  const handleChange = (e) => {
    setRegion(e.target.value)
  }
  const changeSearch = (e) => {
    setRegion("name/"+e.target.value)
  }


  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'

  }

  var body = document.body;
  var modeTextD;
  var modeTextL;
  const mode = () => {
    modeTextD = document.getElementById('txtD')
    modeTextL = document.getElementById('txtL')
    body.classList.toggle('dark-mode');
    modeTextL.classList.toggle('true');
    modeTextD.classList.toggle('false')

  }

  return (
    loading ?
      <div className="loader"> <h1>Loading<span id="s1">.</span><span id="s2">.</span><span id="s3">.</span></h1></div>
      :
      <Router>
        <nav id="navBar">
          <div className="navbar-brand"><h1>Explore The World</h1></div>

          <div onClick={mode} className="mode"><img src="moon.png" alt="" id="moon" /> 
          <span id="txtD">Dark Mode</span>	
          <span className="txtL" id="txtL">Light Mode</span>	
          </div>
        </nav>
        <Switch>
          <Route path='/explore'  >
            <Explore setRegion={setRegion} path={path} />
          </Route>

          <Route path='/'>
            <form action="" method="get" className="selector">
              <input type="search" name="" id="" placeholder="Search" onChange={changeSearch}  />
              <label >
               <strong>Filter by Continent: </strong> 
              <select name="region" id="" onChange={handleChange} >
                <option value="#">...</option>
                <option value="region/asia">Asia</option>
                <option value="region/africa">Africa</option>
                <option value="region/americas">Americas</option>
                <option value="region/europe">Europe</option>
                <option value="region/oceania">Oceania</option>
              </select>
              </label>
              
            </form>
            {
              // err? <h1> Result not found! </h1>
              // :
              <div style={styles}>
                 {
                   countries.map((country, i) => <Card path={path} setPath=   {setPath} country={country} key={i} />)
                 }
              </div>
            }
            
          </Route>


        </Switch>

      </Router>
  );
}

export default App;
