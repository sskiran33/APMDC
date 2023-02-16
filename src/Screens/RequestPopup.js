import { Link } from 'react-router-dom'
import Logo from '../assets/successfull.png.png'
import React from 'react'

const RequestPopup = () => {
  return (
    <div>
        <div>
            <img src={Logo} className='img-successful'/>
              <h1 style={{color :'blue'}}>Your Request Placed Successfully!</h1>
        </div>
          <div>
        <Link to='/home'> <button className='button-ok'>OK</button></Link>
          </div>
          <div>
        <Link to='/all'><button className='request'>See All Requests</button></Link> 
          </div>
    </div>
  )
}

export default RequestPopup