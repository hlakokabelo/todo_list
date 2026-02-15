import React from 'react'
import img from '../assets/page-Not-Found.png'
import { Navigate } from 'react-router-dom'

const PageNotFound = () => {

  return (

    <div className='text-2xl text-center m-15px'>
      oops... page not found
      <p></p>
      <a  className='text-blue-500' href="/">go home</a>
    </div>

  )
}

export default PageNotFound