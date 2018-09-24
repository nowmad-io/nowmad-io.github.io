import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import axios from 'axios';

import Layout from '../components/layout';
import Input from '../components/input';

import styles from './styles.module.scss';
import googlePlayBadge from "../assets/images/google-play-badge.png";
import logoFullWhite from "../assets/images/logo-full-white.png";
import nexus5 from "../assets/images/nexus5.png";
import screenshot1 from "../assets/images/screenshots/screenshot1.jpg";
import screenshot2 from "../assets/images/screenshots/screenshot2.jpg";
import screenshot3 from "../assets/images/screenshots/screenshot3.jpg";
import rightArrow from "../assets/images/right-arrow.png";
import leftArrow from "../assets/images/left-arrow.png";

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
      value: '',
      submitted: false,
    };

    this._slider = React.createRef();
  }

  onChange = (value) => this.setState({
    value,
    submitted: false,
  });

  onNotifyMe = (event) => {
    event.preventDefault();
    const { submitted, value } = this.state;

    if (submitted) {
      return;
    }

    this.setState({ submitted: true });
    axios.post('https://api.nowmad.io/api/notifyme/', { email: value });
  }

  onLeftClick = () => {
    this._slider.current.slickPrev();
  }

  onRightClick = () => {
    this._slider.current.slickNext();
  }

  render() {
    const { slideSettings, value, submitted } = this.state;

    return (
      <Layout>
        <Container className={styles.container}>
          <Row>
            <Col>
              <img className={styles.logo} src={logoFullWhite} alt="Nowmad Logo"/>
            </Col>
          </Row>
          <Row className={styles.infoWrapper}>
            <Col lg="7">
              <h1 className={styles.h1}>
                Trust your friends<br />
                Go Travel<br />
                Experience the World<br />
              </h1>
              <h2 className={styles.h2}>
                Nowmad lets you share with your friends your best experiences and discover new ways of enjoing the world around you.
              </h2>
              <a
                className={styles.link}
                href="https://play.google.com/store/apps/details?id=com.nowmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={googlePlayBadge} alt="Google Play Badge" className={styles.image}/>
              </a>
              <p className={styles.p}>
                You can get notify when the IOS version is released.
              </p>
              <form onSubmit={this.onNotifyMe}>
                <Input
                  name="email"
                  placeholder="Email address"
                  actionText={submitted ? "Thank you !" : "Notify me"}
                  onActionClick={this.onNotifyMe}
                  value={value}
                  onChange={this.onChange}
                />
              </form>
            </Col>
            <Col xl="1" className={styles.helper}/>
            <Col lg="5" xl="4">
              <div className={styles.frameWrapper}>
                <img
                  onClick={this.onLeftClick}
                  className={styles.arrow}
                  src={leftArrow}
                  alt="Left arrow"
                />
                <div className={styles.nexusFrame}>
                  <img className="img-fluid img-center" src={nexus5} alt="nexus 5 frame" />
                  <Slider
                    ref={this._slider}
                    {...slideSettings}
                    className={styles.slickSlider}
                  >
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
                <img
                  onClick={this.onRightClick}
                  className={styles.arrow}
                  src={rightArrow}
                  alt="Right arrow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
