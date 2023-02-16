import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png.png'
import React from 'react';

const Screen3 = () => {
  return (
    <div>
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
                <h1 style={{color : 'blue'}}>Forgot Password?</h1>
                <p style={{fontSize : 20}}>Confirm your Email and we will send the instructions</p>
              </div>
              <div>
                  <input type='text' placeholder='Enter Email' className='input' />
              </div>
              <div>
          <Link to='/'> <button className='button'>Submit</button></Link>
              </div>
    </div>
    </div>
  )
}

export default Screen3