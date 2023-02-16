import Error from '../assets/OIP.jpg'
import React from 'react'
import Scrolling from './Navbar'
import successfull from '../assets/successfull.png.png'

const RequestApproval = () => {
  return (
    <div>
          <div>
              <div>
                  <Scrolling />
              </div>
              <div className='container-fluid' style={{ backgroundColor: ' rgb(168, 215, 239)' ,height:'100vh'}}>

                 
                      
                 

                  <div className='row'>
                      <div className='col-1'>

                      </div>
                      <div className='col-10'>
                          <h4 style={{ color: 'blue' }}>Sep 01, 2021</h4>
                          <div style={{ borderRadius: '30px', boxShadow: '1px 1px 1px #9E9E9E' }} className='card p-5 mt-4'>
                              <div className='container-fluid'>
                                  <div className='row'>
                                      <div className='col-1'>
                                          <img src={successfull} width='40px' />
                                      </div>
                                      <div className='col-9'>
                                          <h3>
                                              Visakapatnam
                                          </h3>
                                          <p>Requests Links | <span style={{ color: 'red' }}>Delete</span></p>
                                      </div>

                                      <div className='col-2'>
                                          <h3 style={{ color: 'blue' }}>
                                              200
                                          </h3>
                                          <p>Quantity</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div style={{ borderRadius: '30px', boxShadow: '1px 1px 1px #9E9E9E' }} className='card p-5 mt-4'>
                              <div className='container-fluid'>
                                  <div className='row'>
                                      <div className='col-1'>
                                          <img src={successfull} width='40px' />
                                      </div>
                                      <div className='col-9'>
                                          <h3>
                                              Kurnool
                                          </h3>
                                          <p>Requests Links | <span style={{ color: 'red' }}>Delete</span></p>
                                      </div>

                                      <div className='col-2'>
                                          <h3 style={{ color: 'blue' }}>
                                              5500
                                          </h3>
                                          <p>Quantity</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div style={{ borderRadius: '30px', boxShadow: '1px 1px 1px #9E9E9E' }} className='card p-5 mt-4'>
                              <div className='container-fluid'>
                                  <div className='row'>
                                      <div className='col-1'>
                                          <img src={successfull} width='40px' />
                                      </div>
                                      <div className='col-9'>
                                          <h3>
                                              Kurnool
                                          </h3>
                                          <p>Requests Links | <span style={{ color: 'red' }}>Delete</span></p>
                                      </div>

                                      <div className='col-2'>
                                          <h3 style={{ color: 'blue' }}>
                                              4000
                                          </h3>
                                          <p>Quantity</p>
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
          </div>
  )
}

export default RequestApproval;