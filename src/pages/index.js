import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const IndexPage = () => (
<div className='top'>
  <section id='showcase' className='py-5 text-white'>
    <div className='primary-overlay'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col text-center'>
            <h1 className='display-4 myhero text-center'>A magazine of beautiful independent bookstores around the world</h1>
            <Link to='/about' className='btn btn-outline-warning btn-lg read'><i
              className='fa fa-arrow-right' /> Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id='portfolio'>
    <div className='container-fluid'>
      <h2 className='text-center'>Welcome To The Travel Shelf</h2>
      <hr align='center' width='30%' />
      <p className='text-center header'>Browse Our Portfolio And Visit Your Local Independent Bookstores Today!</p>
      <div className='row no-gutters d-flex flex-wrap justify-content-center align-items-baseline'>
      </div>
    </div>
  </section>

</div>
)

export default IndexPage
