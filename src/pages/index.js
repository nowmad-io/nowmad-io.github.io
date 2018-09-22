import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';

import Layout from '../components/layout'

import styles from './index.module.scss';
import googlePlayBadge from "../assets/images/google-play-badge.png"
import logoFullWhite from "../assets/images/logo-full-white.png"
import nexus5 from "../assets/images/nexus5.png"
import screenshot1 from "../assets/images/screenshots/screenshot1.jpg"
import screenshot2 from "../assets/images/screenshots/screenshot2.jpg"
import screenshot3 from "../assets/images/screenshots/screenshot3.jpg"

export default class IndexPage extends PureComponent {
  constructor(props) {
      super(props);

      this.state = {
        slideSettings: {
          arrows: true,
          infinite: true,
          speed: 200,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      };
    }

  render() {
    const { slideSettings } = this.state;

    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <img className={styles.logo} src={logoFullWhite} alt="Nowmad Logo"/>
              <h1 className={styles.h1}>
                Trust your friends<br />
                Go Travel<br />
                Experience the World<br />
              </h1>
              <h2 className={styles.h2}>
                Nowmad is an App that lets you share with your friends your best experiences and discover new ways of enjoing the world around you.
              </h2>
              <img className={styles.image} src={googlePlayBadge} alt="Google Play Badge" />
              <p className={styles.p}>
                You can get notify when the IOS version is released.
              </p>
            </Col>
            <Col>
              <div className={styles.nexusFrame}>
                <img className="img-fluid img-center" src={nexus5} alt="nexus 5 frame" />
                <Slider {...slideSettings} className={styles.slickSlider}>
                  <div>
                    <img src={screenshot1} alt="Nowmad screenshot 1" />
                  </div>
                  <div>
                    <img src={screenshot2} alt="Nowmad screenshot 2" />
                  </div>
                  <div>
                    <img src={screenshot3} alt="Nowmad screenshot 3" />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
