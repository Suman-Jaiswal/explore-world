import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import data from '../api.js'
import { ThemeContext } from '../ThemeContext';

export default function Home() {
    var [countries, setCountries] = useState([]);
    var [loading, setLoading] = useState(true)
    var [region, setRegion] = useState('')
    const {darkMode} = useContext(ThemeContext)

    useEffect(() => {
        if (region === '') setCountries(data)
        else setCountries(data.filter(x => x.region === region))
        setLoading(false)
        console.log(data)
    }, [region])

    const handleChange = e => {
        setRegion(e.target.value);
    }

    const changeSearch = (e) => {
        e.target.value === "" ? setRegion('') :
        setCountries(data.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <>
            <div className={`selector mb-2 px-5 sticky-top py-3 ${darkMode? 'bg-dark text-light': 'bg-light text-dark'}`}>
                <div className="row">
                    <form action="" method="get" className="col-8" >
                        <label >
                            <strong>Filter by Continent: </strong>
                            <select name="region" id="" onChange={handleChange} className='rounded-pill px-3' >
                                <option value="">All</option>
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </label>
                    </form>

                    <form className="col-4 ">
                        <input type="text" placeholder="Search By Name..." onChange={changeSearch} className='rounded-pill w-100 py-1 px-3' />
                    </form>
                </div>
            </div>
            {loading ?
                <div className="loader"> <h2>Loading<span id="s1">.</span><span id="s2">.</span><span id="s3">.</span></h2></div>
                :
                countries.length > 0 ?
                    <div className="container">
                        <div className="row">
                            {
                                countries.map((country, i) => <div className='col-3' ><Card country={country} key={i} /></div>)
                            }
                        </div>
                    </div> : <h1
                        style={{
                            textAlign: 'center',
                            marginTop: '100px',
                            color: 'grey'
                        }}
                    >Result Not Found!</h1>
            }
        </>)
}
