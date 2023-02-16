import Profile1 from '../assets/Circle-Profile.png'
import React from 'react'
import Scrolling from './Navbar'

function Profile() {
  return (
    <div>
        <div>
            <Scrolling/>
        </div>
    <div style={{background:'rgb(168, 215, 239)',height:'100vh'}}>
        <h3 style={{color:'blue'}}>Profile</h3>
        <center>
            <img src={Profile1} width="200px"/>
            <h3 style={{color:'blue'}}>Joe Doe</h3>
            <form>
                <div>
                    <label  style={{color:'grey'}}>
                        Full Name
                        <input type='text' className='form-control p-2' style={{borderRadius:'20px',width:'500px'}}/>
                    </label>
                </div>
                
                <div>
                    <label style={{color:'grey'}}>
                        Email ID
                        <input type='text' className='form-control p-2' style={{borderRadius:'20px',width:'500px'}}/>
                    </label>
                </div>
                <div>
                    <label style={{color:'grey'}}>
                        Phone Number
                        <input type='number' className='form-control p-2' style={{borderRadius:'20px',width:'500px'}}/>
                    </label>
                </div>
                <div>
                    <label  style={{color:'grey'}}>
                        Address
                        <input type='text' className='form-control p-2' style={{borderRadius:'20px',width:'500px'}}/>
                    </label>
                </div>
                <div style={{marginTop:'40px'}}>
                    <button style={{border:'1px solid blue',borderRadius:'20px',width:'300px',padding:'10px',background:'rgba(168, 215, 239,0.9)',color:'blue'}}>Edit Profile</button>
                </div>
            </form>
        </center>
    </div>
      </div>
  )
}

export default Profile