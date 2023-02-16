import Guntur from '../assets/guntur.jpg'
import { Link } from 'react-router-dom'
import React from 'react'
import Scrolling from './Navbar'
import Vizag from '../assets/Vizag.jpg'
import kurnool from '../assets/kurnool.jpg'
import profile from '../assets/Circle-Profile.png'
import westgodavari from '../assets/westgodavari.jpg'

export default function Home() {
  return (
    <div>
        <div>
            <Scrolling/>
        </div>
    <div className='container-fluid' style={{backgroundColor:'rgb(168, 215, 239)'}}>
        <div className='row'>
            <div className='col-2'>
                
            </div>
            <div className='col-8'>
                <div className='card mt-4 p-4'style={{borderRadius:'20px'}}>
                    <center>
                        <img src={profile}width="200px"/>
                        <h3 style={{color:'blue'}}>John Doe</h3>
                        <p style={{color:'grey'}}>Visakapatnam</p>
                              <Link to='/placed'><button style={{ borderRadius: '20px', width: '200px' }} className='btn btn-primary'>Place Request</button></Link>
                        <div className='container-fluid'>
                            <div className='row' style={{marginTop:'20px'}}>
                                <div className='col-6' style={{borderRight:'1px solid grey'}}>
                                   <h3 style={{color:'blue'}} >04</h3> 
                                   <p style={{color:'grey'}}>Total Request</p>
                                </div>
                                <div className='col-6'>
                                <h3 style={{color:'blue'}} >01</h3> 
                                   <p style={{color:'grey'}}>Pending Request</p>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
                </div>
                <div className='col-2'>
                
                </div>
                <div className='col-1'>
                
                </div>
                <div className='col-10'>
                <h4 style={{color:'blue'}}>Sep 01, 2021</h4> 
                       <div style={{borderRadius:'30px',boxShadow:'1px 1px 1px #9E9E9E'}} className='card p-5 mt-4'> 
                        <div className='container-fluid'>
                            <div className='row'>
                               <div className='col-1'>
                               <img src={kurnool} width="200px" style={{borderRadius:'20px'}}/>

                                </div> 
                                <div className='col-9'>
                                    <h3>
                                        Kurnool
                                    </h3>
                                    <p style={{color:'grey'}}>Total Production of sticks</p>
                                </div>
                                
                                <div className='col-2'>
                                    <h3 style={{color:'blue'}}>
                                        12000
                                    </h3>
                                    </div>
                            </div>
                        </div>
                       </div>
                       </div>
                      
                    <div className='col-1'>
                    
                    </div>
                    <div className='col-1'>
                
                </div>
                <div className='col-10'>
                       <div style={{borderRadius:'30px',boxShadow:'1px 1px 1px #9E9E9E'}} className='card p-5 mt-4'> 
                        <div className='container-fluid'>
                            <div className='row'>
                               <div className='col-1'>
                               <img src={Vizag} width="200px" style={{borderRadius:'20px'}}/>
                                </div> 
                                <div className='col-9'>
                                    <h3>
                                        Vishakapatnam
                                    </h3>
                                    <p style={{color:'grey'}}>Total Production of sticks</p>
                                </div>
                                
                                <div className='col-2'>
                                    <h3 style={{color:'blue'}}>
                                        12000
                                    </h3>
                                    </div>
                            </div>
                        </div>
                       </div>
                       </div>
                      
                    <div className='col-1'>
                    
                    </div>
                    <div className='col-1'>
                
                </div>
                <div className='col-10'>
                       <div style={{borderRadius:'30px',boxShadow:'1px 1px 1px #9E9E9E'}} className='card p-5 mt-4'> 
                        <div className='container-fluid'>
                            <div className='row'>
                               <div className='col-1'>
                               <img src={Guntur} width="200px" style={{borderRadius:'20px'}}/>

                                </div> 
                                <div className='col-9'>
                                    <h3>
                                        Guntur
                                    </h3>
                                    <p style={{color:'grey'}}>Total Production of sticks</p>
                                </div>
                                
                                <div className='col-2'>
                                    <h3 style={{color:'blue'}}>
                                        12000
                                    </h3>
                                    </div>
                            </div>
                        </div>
                       </div>
                       </div>
                      
                    <div className='col-1'>
                    
                    </div>
                    <div className='col-1'>
                
                </div>
                <div className='col-10'>
                       <div style={{borderRadius:'30px',boxShadow:'1px 1px 1px #9E9E9E'}} className='card p-5 mt-4'> 
                        <div className='container-fluid'>
                            <div className='row'>
                               <div className='col-1'>
                               <img src={westgodavari} width="200px" style={{borderRadius:'20px'}}/>

                                </div> 
                                <div className='col-9'>
                                    <h3>
                                        West Godavari
                                    </h3>
                                    <p style={{color:'grey'}}>Total Production of sticks</p>
                                </div>
                                
                                <div className='col-2'>
                                    <h3 style={{color:'blue'}}>
                                        12000
                                    </h3>
                                    </div>
                            </div>
                        </div>
                       </div>
                       </div>
                      
                    <div className='col-1'>
                    
                    </div>
                    
             </div>
         </div>
      </div>
        
    
  )
}
