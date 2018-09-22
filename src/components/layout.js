import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Nowmad.io"
      meta={[
        { name: 'description', content: 'Nowmad is an App that lets you share with your friends your best experiences and discover new ways of enjoying the world around you.' },
        { name: 'keywords', content: 'social, travel, network' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle={'Nowmad.io'} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
