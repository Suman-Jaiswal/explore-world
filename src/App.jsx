import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavbarComponent from './components/Navbar';

function App() {
    return (
        <>
            <NavbarComponent />
            <Home />
        </>
    );
}

export default App;
