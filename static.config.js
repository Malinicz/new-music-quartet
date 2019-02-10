import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

import client from './src/services/contentfulClient';

import pl from './src/data/pl';

const siteRoot = 'https://newmusicquartet.netlify.com';
const stagingSiteRoot = 'https://staging-newmusicquartet.netlify.com';
const basePath = '';
const stagingBasePath = '';

export default {
  siteRoot,
  stagingSiteRoot,
  basePath,
  stagingBasePath,
  getSiteData: async () => ({
    siteData: pl.shared,
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/scenes/Home',
        getData: () => ({
          routeData: pl.home,
          canonicalUrl: `${siteRoot}/`,
        }),
      },
      {
        path: '/submission-success',
        component: 'src/scenes/MailSubmissionSuccess',
      },
      {
        is404: true,
        component: 'src/scenes/404',
      },
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <title>New Music Quartet</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#fff" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black-translucent"
            />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/newmusicquartet-favicon.png"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
