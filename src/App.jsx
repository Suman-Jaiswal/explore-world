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
  var [darkTheme, setDarkTheme] = useState(true)
  var [searchedText, setSearchedText] = useState('')

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/${region}`)
      .then(Response => Response.json())
      .then((data )=> {
        setCountries(data)
        setLoading(false)
  
      }
      ).catch(err => {
        console.log(err);
        setCountries([]);
      })
  
  }, [region])
  const handleChange = e => {
    setRegion(e.target.value);
  }
  const changeSearch = (e) => {
    e.target.value?
    setRegion("name/"+e.target.value) : setRegion('all')
    setSearchedText("name/"+e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    setRegion(searchedText) 
    
  }


  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'

  }

  var body = document.body
  var modeTextD;
  var modeTextL;
  const mode = () => {
    setDarkTheme(!darkTheme)
    modeTextD = document.getElementById('txtD')
    modeTextL = document.getElementById('txtL')
    modeTextL.classList.toggle('lightL');
    modeTextD.classList.toggle('lightD');
  }
  
  darkTheme? body.style.backgroundColor = 'black' : body.style.backgroundColor= 'white'
  darkTheme? body.style.color = 'white' : body.style.color= 'black'
  

  return (
    loading ?
      <div className="loader"> <h2>Loading<span id="s1">.</span><span id="s2">.</span><span id="s3">.</span></h2></div>
      :
      <Router>
        <nav id="navBar" style={{
          backgroundColor: darkTheme? 'gray' : 'rgb(243, 230, 230)',
        }}>
          <div className="navbar-brand"><h1>Explore The World <img
          style={{
            height: '30px',
            position:'relative',
            top: '7.5px',
            boxShadow:  '0 2px 5px 1px rgb(64 60 67 / 50%)',
            borderRadius: '100%',
            boxSizing: 'border-box',
           
           
        }}
          src="favicon.ico" alt="" /> </h1></div>
          
          <div onClick={mode} className="mode"><img src="moon.png" alt="" id="moon" /> 
          <span id="txtD" className='txtD' >Dark Mode</span>	
          <span id="txtL">Light Mode</span>
          </div>
          <div className="scroller" onClick={() =>{

            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
            }>&#x2191;</div>	
        </nav>
        <Switch>
          <Route path='/explore'  >
            <Explore setRegion={setRegion} path={path} />
          </Route>

          <Route path='/'>
            <div className="selector">

            <form action="" method="get" className="select" >
              
              <label >
               <strong>Filter by Continent: </strong> 
              <select name="region" id="" onChange={handleChange} >
                <option value="#">All</option>
                <option value="region/asia">Asia</option>
                <option value="region/africa">Africa</option>
                <option value="region/americas">Americas</option>
                <option value="region/europe">Europe</option>
                <option value="region/oceania">Oceania</option>
              </select>
              </label>
            </form>

                  
            <form className="searchBar" action="" onSubmit={submitSearch}>
              <input type="search" name="" id="" placeholder="Search By Name..." onChange={changeSearch}  />
              </form>

            </div>
            {countries.length>0?
              <div style={styles} className="home-container">
                 {
                   countries.map((country, i) => <Card path={path} setPath=   {setPath} country={country} key={i}
                   darkTheme = {darkTheme} />)
                  
                 }
              </div> : <h1
               style={{
                 textAlign:'center',
                 marginTop: '100px',
                 color: 'grey'
               }}
              >Result Not Found!</h1>
            }
           
          </Route>


        </Switch>

      </Router>
  );
}

export default App;
