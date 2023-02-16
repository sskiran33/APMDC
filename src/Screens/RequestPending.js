import Error from '../assets/OIP.jpg'
import React from 'react'
import Scrolling from './Navbar'
import Success from '../assets/sucess-tick.png'

const RequestPending = () => {
  return (
    <div>
          <div>
              <div>
                  <Scrolling />
              </div>
              <div className='container-fluid' style={{height:'100vh', backgroundColor: ' rgb(168, 215, 239)' }}>
                         <div className='kurnool'>
                  <div className='row'>
                      <div className='col-1'>

                      </div>
                      <div className='col-10'>
                          <h4 style={{ color: 'blue' }}>Today</h4>
                          <div style={{ borderRadius: '30px', boxShadow: '1px 1px 1px #9E9E9E' }} className='card p-5'>
                              <div className='container-fluid'>
                                  <div className='row'>
                                      <div className='col-1'>
                                              <img src={Success} width='40px' />
                                      </div>
                                      <div className='col-9'>
                                          <h3>
                                              Kurnool
                                          </h3>
                                          <p>Requests Links | <span style={{ color: 'blue' }}>cancel</span></p>
                                      </div>

                                      <div className='col-2'>
                                          <h3 style={{ color: 'blue' }}>
                                              1200
                                          </h3>
                                          <p>Quantity</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
          </div>
    </div>
    </div>
    </div>
  )
}

export default RequestPending