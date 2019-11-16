import React from 'react';
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList App </h1>
            <Link to="/" style={linkStyle}>Home</Link> |
             <Link to="/about" style={linkStyle}>About</Link>|
             <Link to="/contact" style={linkStyle}>Contact</Link>
             
           
        </header>
    )

}


const headerStyle = {
    background: 'orange',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color:'black',
    textDecoration: 'none'
}
export default Header;


