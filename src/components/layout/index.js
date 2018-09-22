import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './reset.css';
import './fonts.scss';
import './index.scss';

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
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
