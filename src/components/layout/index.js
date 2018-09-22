import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './fonts.scss';
import './index.scss';

library.add(fab, fas);

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
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
    </Helmet>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
