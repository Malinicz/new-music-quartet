import React, { Component } from 'react';
import { object } from 'prop-types';

import { throttle } from 'utils/helpers';

import { Layout } from 'components';
import {
  Intro,
  Bio,
  Concerts,
  Repertoire,
  Download,
  Media,
  Discography,
  Contact,
  Projects,
} from './components';
import { withRouteData } from 'react-static';

class Home extends Component {
  bio = null;
  concerts = null;
  download = null;
  repertoire = null;
  projects = null;
  contact = null;

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
      { name: 'projects', config: this.projects.getBoundingClientRect() },
      { name: 'contact', config: this.contact.getBoundingClientRect() },
    ];

    for (const section of sectionsTopValue) {
      if (
        activeSection !== section.name &&
        section.config.top < 300 &&
        section.config.bottom > 0
      ) {
        return this.setState({ activeSection: section.name });
      }
    }
  };

  onLanguageSwitch = (language) => {
    const { history } = this.props;
    return language === 'pl' ? history.push('/') : history.push('/en');
  };

  render() {
    const { activeSection } = this.state;
    const {
      sharedData: { language },
    } = this.props;

    return (
      <Layout>
        <Intro
          handleLanguageSwitch={this.onLanguageSwitch}
          activeLanguage={language}
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
        <Media />
        <Discography
          createRef={this.createRef}
          isActive={activeSection === 'discography'}
        />
        <Projects
          createRef={this.createRef}
          isActive={activeSection === 'projects'}
        />
        <Download
          createRef={this.createRef}
          isActive={activeSection === 'download'}
        />
        <Repertoire
          createRef={this.createRef}
          isActive={activeSection === 'repertoire'}
        />
        <Contact
          createRef={this.createRef}
          isActive={activeSection === 'contact'}
        />
      </Layout>
    );
  }
}

Home.defaultProps = {
  sharedData: {},
};

Home.propTypes = {
  history: object.isRequired,
  sharedData: object,
};

export default withRouteData(Home);
