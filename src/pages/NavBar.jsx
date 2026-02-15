import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
const nav = useNavigate()
  const userName = 'kabelo'
  const logout = () => {
    nav('login')
  }
  return (
    <>
      <div className="text-end w-5/7">
        <div className="">
          Hi {userName} <span style={{color:'black'}}>|</span>
          <span className='cursor-pointer hover:text-blue-700' onClick={logout}> Logout</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
