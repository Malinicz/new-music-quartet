import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';
import moment from 'moment';

import client from './src/services/contentfulClient';

import pl from './src/data/pl';
import en from './src/data/en';

const siteRoot = 'https://atma.netlify.com';
const stagingSiteRoot = 'https://staging-atma.netlify.com';
const basePath = '';
const stagingBasePath = '';

export default {
  siteRoot,
  stagingSiteRoot,
  basePath,
  stagingBasePath,
  getRoutes: async () => {
    const contentfulData = await client.getEntries();
    const concertsList = contentfulData.items
      .filter(
        (item) =>
          item.fields.category &&
          item.fields.category.fields.name === 'concerts'
      )
      .map((entry) => ({ ...entry.fields }))
      .sort(
        (a, b) =>
          moment(a.date).format('YYYYMMDD') - moment(b.date).format('YYYYMMDD')
      );

    return [
      {
        path: '/',
        component: 'src/scenes/Home',
        getData: () => ({
          routeData: pl.home,
          sharedData: pl.shared,
          concerts: concertsList,
          canonicalUrl: `${siteRoot}/`,
        }),
      },
      {
        path: '/biografia',
        component: 'src/scenes/Bio',
        getData: () => ({
          routeData: pl.bio,
          sharedData: pl.shared,
          canonicalUrl: `${siteRoot}/biografia`,
        }),
      },
      {
        path: '/dyskografia',
        component: 'src/scenes/Discography',
        getData: () => ({
          routeData: pl.discography,
          sharedData: pl.shared,
          canonicalUrl: `${siteRoot}/dyskografia`,
        }),
      },
      {
        path: '/en',
        component: 'src/scenes/Home',
        getData: () => ({
          routeData: en.home,
          sharedData: en.shared,
          concerts: concertsList,
          canonicalUrl: `${siteRoot}/en`,
        }),
      },
      {
        path: '/koncerty',
        component: 'src/scenes/Concerts',
        getData: () => ({
          routeData: pl.concerts,
          sharedData: pl.shared,
          concerts: concertsList,
          canonicalUrl: `${siteRoot}/koncerty`,
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
            <title>Atma Quartet</title>
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
