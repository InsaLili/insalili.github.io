import type { Project } from './types';
import pickitImg from '../assets/pickit.png';
import gonyImg from '../assets/gony.png';
import insectImg from '../assets/insect.png';
import crossworldImg from '../assets/crossworld.png';

export const projectIntro = {
  blurb: 'Selected projects from my PhD (2013 — 2017).',
  toolkit: [
    'Development: AngularJS, Node.js, Mapbox (customizing map), Bootstrap, CouchDB, Heroku, Hammer (touch gestures), WebSockets',
    'UX: user interviews, usability tests, qualitative & quantitative analysis methods',
  ],
};

export const projects: Project[] = [
  {
    name: 'Pickit',
    tagline: 'A decision-making activity for high school students',
    image: pickitImg,
    paragraphs: [
      'Pickit is a decision-making learning activity I designed and developed for high school students. The shared display supports collaboration — discussion, negotiation and decision-taking. Personal devices are used for individual exploration: analysing data of each location, submitting comments and providing evaluation.',
      {
        text: 'This study was published at CSEDU 2017 and won the best student paper award. Read the {paper} or check out the {code}.',
        links: [
          {
            text: 'paper',
            href: 'https://hal.archives-ouvertes.fr/hal-01493815/file/CSEDU_2017_62_CR%20%282%29.pdf',
          },
          {
            text: 'code',
            href: 'https://github.com/InsaLili/myoa-app',
          },
        ],
      },
    ],
  },
  {
    name: 'GoNY',
    tagline: 'A trip planning activity',
    image: gonyImg,
    paragraphs: [
      "GoNY is a trip planning activity I designed and developed to study how the orientation of a large display (horizontal vs. vertical) used alongside tablets impacts participants' collaboration.",
      'Results show that a horizontal surface leads to better equity of interaction and more cohesive activities. On the other hand, group coordination is more structured and is organized around a main interactor when a vertical display is used.',
      {
        text: 'Accepted at INTERACT 2017. Watch the {video} for a quick look.',
        links: [
          { text: 'video', href: 'https://www.youtube.com/watch?v=xp5sjKGCHWw' },
        ],
      },
    ],
  },
  {
    name: 'InsectPuzzle',
    tagline: 'A mobile orienteering learning game',
    image: insectImg,
    paragraphs: [
      'We designed and tested an orienteering mobile learning game to better understand how device use shaped collaboration in highly mobile conditions.',
      'Our results emphasize the importance of considering transitions between arrangements more than F-formations per se. We discuss implications for the design and analysis of mobile collaborative activities.',
      {
        text: 'Published at Mobile HCI 2016. Read the {paper}.',
        links: [
          {
            text: 'paper',
            href: 'https://hal.archives-ouvertes.fr/hal-01363632/file/MobileHCI16-HAL.pdf',
          },
        ],
      },
    ],
  },
  {
    name: 'Cross-device infrastructure',
    tagline: 'Dynamic reconfiguration of interactive spaces',
    image: crossworldImg,
    paragraphs: [
      'An infrastructure that allows the dynamic reconfiguration of interactive spaces by grouping different devices together. I designed a simple web-based game using this infrastructure — the game world is automatically extended when new devices are brought in.',
      {
        text: 'Accepted at ITS 2014. See the {video} and read the {paper}.',
        links: [
          { text: 'video', href: 'https://youtu.be/A-14eEVYPoM' },
          { text: 'paper', href: 'http://dl.acm.org/citation.cfm?id=2669548' },
        ],
      },
    ],
  },
];
