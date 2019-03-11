import React, { Component } from 'react';

import { throttle } from 'utils/helpers';

import { Layout } from 'components';
import { Intro, Bio, Concerts, Repertoire, Download } from './components';

// const pic1 = require('./assets/pic1.jpg');
// const pic2 = require('./assets/pic2.jpg');
// const pic3 = require('./assets/pic3.jpg');

export default class Home extends Component {
  bio = null;
  concerts = null;
  download = null;
  repertoire = null;

  state = {
    activeSection: '',
  };

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.throttleFn, 100));
  }

  createRef = (name, el) => {
    if (el) {
      this[name] = el;
    }
  };

  throttleFn = () => {
    const { activeSection } = this.state;

    const sectionsTopValue = [
      {
        name: 'bio',
        config: this.bio.getBoundingClientRect(),
      },
      { name: 'concerts', config: this.concerts.getBoundingClientRect() },
      { name: 'download', config: this.download.getBoundingClientRect() },
      { name: 'repertoire', config: this.repertoire.getBoundingClientRect() },
    ];

    for (const section of sectionsTopValue) {
      if (
        activeSection !== section.name &&
        section.config.top < 300 &&
        section.config.bottom > 0
      ) {
        console.log('setting active section: ', section.name);
        return this.setState({ activeSection: section.name });
      }
    }
  };

  onLanguageSwitch = () => {
    console.log('switching languages');
  };

  render() {
    const { activeSection } = this.state;

    return (
      <Layout>
        <Intro
          handleLanguageSwitch={this.onLanguageSwitch}
          activeSection={activeSection}
        />
        <Bio
          createRef={this.createRef}
          activeSection={activeSection}
          isActive={activeSection === 'bio'}
        />
        <Concerts
          createRef={this.createRef}
          isActive={activeSection === 'concerts'}
        />
        <Download
          createRef={this.createRef}
          isActive={activeSection === 'download'}
        />
        <Repertoire
          createRef={this.createRef}
          isActive={activeSection === 'repertoire'}
        />
      </Layout>
    );
  }
}
