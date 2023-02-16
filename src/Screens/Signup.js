import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png.png'
import React from 'react'

const Screen2 = () => {
  return (
      <div className='contain'>
          <div className='satya'>
              <img src={Logo} />
          </div>
          <div className='text'>
              <h3>Andhra Pradesh Mineral</h3>
              <h2>Development Corporation</h2>
          </div>
          <hr className='cherry'></hr>
          <div>
              <input type='text' placeholder='Enter FullName' className='input' />
          </div>
          <div>
              <input type='text' placeholder='Enter Email' className='input' />
          </div>
          <div>
              <input type='password' placeholder='Enter password' className='input' />
          </div>
          <div>
              <Link to='/'><button className='button'>SignUp</button></Link>
          </div>
          <div className='Loginhere'>
              <Link to='/'><a href='/'>Already have an account?Login here</a></Link>
          </div>
      </div>
  )
}

export default Screen2