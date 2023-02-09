import hangman_img from './assets/img/project_hangman.png';
import giftastic_img from './assets/img/project_giftastic.png';
import artattack_img from './assets/img/project_artattack.png';
import rps_img from './assets/img/project_rps.png';
import burgertown_img from './assets/img/project_burgertown.png';
import devdash_img from './assets/img/project_devdash.png';

// import jsart_img from './assets/img/project_jsart.png';
import cssart_img from './assets/img/project_cssart.png';
import thestudio_img from './assets/img/project_thestudio.png';

export const projects = [
  {
    name: 'Stranger Hangman',
    description: 'A vanilla JS Stranger Things themed hangman game.',
    preview_img: hangman_img,
    github_url: 'https://github.com/alightedlamp/Hangman-Game',
    url: 'https://alightedlamp.github.io/Hangman-Game/'
  },
  {
    name: 'GifTastic',
    description:
      "A clone of the Giphy search page using Giphy's API. I tried to copy as much of the functionality and design as possible from scratch.",
    preview_img: giftastic_img,
    github_url: 'https://github.com/alightedlamp/GifTastic',
    url: 'https://alightedlamp.github.io/GifTastic/'
  },
  {
    name: 'Art Attack!',
    description:
      'Art Attack is a role playing game where players pick a character and strategically attack other artists in hopes of coming out the winner. Uses MoJS for some silly attack animations, and jQuery for just about everything else.',
    preview_img: artattack_img,
    github_url: 'https://github.com/alightedlamp/RPG-Game',
    url: 'https://alightedlamp.github.io/RPG-Game/'
  },
  {
    name: 'RPS Multiplayer',
    description: 'A Rock/Paper/Scissors multiplayer game built with Firebase.',
    preview_img: rps_img,
    github_url: 'https://github.com/alightedlamp/RPS-Multiplayer',
    url: 'https://alightedlamp.github.io/RPS-Multiplayer/'
  },
  {
    name: 'Burger Town',
    description:
      'An application built with Node, Express, Handlebars, and MySQL which lets users enter burgers and restaurants at which they would like to eat.',
    preview_img: burgertown_img,
    github_url: 'https://github.com/alightedlamp/atx-burgers',
    // url: 'https://burger-town-atx.herokuapp.com/'
  },
  {
    name: 'Dev Dash',
    description:
      "An application built with Node, Express, Handlebars, Sequelize, Passport, and the Bulma CSS framework. Users add projects, milestones, and resources to better organize the items they're working on to become better developers.",
    preview_img: devdash_img,
    github_url: 'https://github.com/alightedlamp/devdash',
    // url: 'https://devprogdash.herokuapp.com'
  },
  {
    name: 'Monique',
    description:
      'Monique is a bot built with NodeJS that responds to voice commands. She aspires to be like Alexa one day. She can tell jokes, play a song on Spotify, and update you on your Twitter activity.',
    github_url: 'https://github.com/alightedlamp/Monique'
  }
];

export const art = [
  // {
  //   name: 'JSART.ART',
  //   description: 'A collection of JavaScript-based drawing applications.',
  //   preview_img: jsart_img,
  //   github_url: 'https://github.com/alightedlamp/JSART.ART',
  //   url: 'https://jsart.art'
  // },
  {
    name: 'CSSART.CLUB',
    description:
      'A collection of subtly interactive digital paintings made with HTML and CSS.',
    preview_img: cssart_img,
    github_url: 'https://github.com/alightedlamp/CSSART.CLUB',
    url: 'https://cssart.club'
  },
  {
    name: 'The Studio',
    description: 'An ephemeral abstract painting generator.',
    preview_img: thestudio_img,
    github_url: 'https://github.com/alightedlamp/the-studio',
    url: 'https://alightedlamp.github.io/the-studio/'
  }
];
