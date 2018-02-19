import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Travel Shelf"
      meta={[
        { name: 'description', content: 'A magazine and index of beautiful global independent bookstores' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    <NavBar />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
