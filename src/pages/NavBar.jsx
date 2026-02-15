import React from 'react'
import './navBar.css'

const Navbar = () => {

  const userName = 'kabelo'
  const logout = () => {
    alert("logging out")
  }
  return (
    <>
      <div className="main-nav">
        <div className="nav-header">
          Hi {userName} <span style={{color:'black'}}>|</span>
          <span className='logout-btn' onClick={logout}> Logout</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
