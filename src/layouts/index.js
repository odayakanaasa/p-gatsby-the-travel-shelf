import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

import 'font-awesome/css/font-awesome.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Travel Shelf"
      meta={[
        { name: 'description', content: 'A magazine and index of beautiful global independent bookstores' },
      ]}
    />
    <NavBar />
    {children()}
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
