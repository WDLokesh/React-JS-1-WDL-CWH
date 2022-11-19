import React from 'react'//irr :-- Short
import PropTypes from 'prop-types' //impt :-- Short


export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title} Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">PRODUCTS</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.contact}Contact US</a>
          </li>

          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></>
  )
}



//proptypes we can change type of props string integer etc...
Navbar.propTypes={
    title: PropTypes.string, // title: PropTypes.string.isReqired    :: if we did not add in props title isn App.js show an error 
    contact:PropTypes.string,
}

/*
//Default props setting
Navbar.defaultProps={
    title:"Default Title ",
    contact:"Default Contact"

}
*/