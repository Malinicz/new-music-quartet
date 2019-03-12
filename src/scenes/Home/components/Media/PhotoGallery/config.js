import a from './assets/small/a.jpg';
import b from './assets/small/b.jpg';
import c from './assets/small/c.jpg';
import d from './assets/small/d.jpg';
import e from './assets/small/e.jpg';
import f from './assets/small/f.jpg';
import g from './assets/small/g.jpg';

import aFullSize from './assets/large/a.jpg';
import bFullSize from './assets/large/b.jpg';
import cFullSize from './assets/large/c.jpg';
import dFullSize from './assets/large/d.jpg';
import eFullSize from './assets/large/e.jpg';
import fFullSize from './assets/large/f.jpg';
import gFullSize from './assets/large/g.jpg';

export const photos = [
  {
    image: a,
    fullImage: aFullSize,
    rotate: -15,
    scale: 1,
    top: -200,
    left: -450,
  },
  {
    image: c,
    fullImage: cFullSize,
    rotate: 10,
    scale: 1.1,
    top: -200,
    left: 250,
    desktopOnly: true,
  },
  {
    image: b,
    fullImage: bFullSize,
    rotate: 10,
    scale: 0.7,
    top: -280,
    left: -200,
  },
  {
    image: e,
    fullImage: eFullSize,
    rotate: 3,
    scale: 1.2,
    top: 0,
    left: -300,
  },
  {
    image: f,
    fullImage: fFullSize,
    rotate: -25,
    scale: 1.1,
    top: 80,
    left: 0,
  },
  {
    image: d,
    fullImage: dFullSize,
    rotate: -10,
    scale: 0.85,
    top: -200,
    left: 0,
  },
  {
    image: g,
    fullImage: gFullSize,
    rotate: 3,
    scale: 0.8,
    top: 50,
    left: 200,
    desktopOnly: true,
  },
  {
    image: c,
    fullImage: cFullSize,
    rotate: 10,
    scale: 1.1,
    top: -200,
    left: 250,
    desktopOnly: true,
  },
  {
    image: c,
    fullImage: cFullSize,
    rotate: 10,
    scale: 1.1,
    top: 250,
    left: -400,
    mobileOnly: true,
  },
  {
    image: g,
    fullImage: gFullSize,
    rotate: -10,
    scale: 0.8,
    top: 300,
    left: -150,
    mobileOnly: true,
  },
];
