import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import styles from './index.module.scss';
import googlePlayBadge from "../assets/images/google-play-badge.png"

const IndexPage = () => (
  <Layout>
    <h1>
      Trust your friends<br />
      Go Travel<br />
      Experience the World<br />
    </h1>
    <h2>
      Nowmad is an App that lets you share with your friends your best experiences and discover new ways of enjoing the world around you.
    </h2>
    <img className={styles.image} src={googlePlayBadge} alt="Google Play Badge" />
    <p>You can get notify when the IOS version is released.</p>
  </Layout>
)

export default IndexPage
