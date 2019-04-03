import bioPage from '../bio';

export default {
  bio: {
    title: 'Biography',
    paragraph1: bioPage.paragraphs[0],
    paragraph2: bioPage.paragraphs[1],
    moreContentButtonLabel: 'Read more',
    moreContentButtonLink: '/biography/',
    mainPhotoAlt: 'Atma Quartet sitting on a couch',
  },
  concerts: {
    title: 'Concerts',
    eventDetailsText: 'Details',
    eventTimePrefix: 'Time',
    moreContentButtonLabel: 'Show all',
    moreContentButtonLink: '/concerts/',
    mainPhotoAlt: 'Atma Quartet sitting on a couch',
  },
  repertoire: {
    title: 'Repertoire',
    subtitle: 'Season 2019/2020',
    mainPhotoAlt: 'Violin',
    moreContentButtonLabel: 'Full repertoire',
    list: [
      'J. Haydn – String quartet op. 33 nr 5 [15’]',
      'L. van Beethoven – String quartet op. 18 nr 4 [25’]',
      'F. Mendelssohn – String quartet op. 13 nr 2 [30’] ',
      'S. Moniuszko – String quartet  nr 1 [15’]',
      'K. Szymanowski – String quartet op. 56 nr 2 [20’]',
      'B. Bartok – String quartet Sz. 85 nr 3 [15’]',
      'D. Szostakowicz – String quartet op. 110 nr 8 [20’]',
      'A. Panufnik – String quartet „Wycinanki” nr 3 [12’]',
      'K. Penderecki – String quartet „Kartki z niezapisanego dziennika” [18’]',
    ],
  },
  discography: {
    title: 'Discography',
    moreContentButtonLabel: 'Show all',
    moreContentButtonLink: '/discography/',
    albumPhotoAlt: 'Album photo',
  },
  download: {
    title: 'Download',
    mainPhotoAlt: 'Atma Quartet photo',
    bio: 'Biography',
    bioLink:
      'https://onedrive.live.com/view.aspx?cid=fb3effc860d8a13d&page=view&resid=FB3EFFC860D8A13D!108&parId=FB3EFFC860D8A13D!104&authkey=!ABmyuXIFcn7xyRM&app=Word',
    bioShort: 'Biography - short',
    bioShortLink:
      'https://onedrive.live.com/view.aspx?cid=fb3effc860d8a13d&page=view&resid=FB3EFFC860D8A13D!119&parId=FB3EFFC860D8A13D!104&authkey=!ABmyuXIFcn7xyRM&app=Word',
    rider: 'Technical rider',
    riderLink:
      'https://onedrive.live.com/?authkey=%21ABmyuXIFcn7xyRM&cid=FB3EFFC860D8A13D&id=FB3EFFC860D8A13D%21105&parId=FB3EFFC860D8A13D%21104&o=OneUp',
    photos: 'Photos',
    photosLink:
      'https://onedrive.live.com/?authkey=%21ABmyuXIFcn7xyRM&id=FB3EFFC860D8A13D%21104&cid=FB3EFFC860D8A13D',
  },
  media: {
    title: 'Media',
    photoLinkAriaLabel: 'Full size image link',
  },
  contact: {
    title: 'Contact',
    callUsLabel: 'Call us',
    sendMessageLabel: 'Send a message',
    formLabelName: 'name',
    formLabelDescription: 'message',
    formSubmitButtonLabel: 'send',
    formSubmissionSuccessLink: '/message-sent/',
    mainPhotoAlt: 'Atma Quartet photo',
  },
  projects: {
    title: 'Projects',
    moreContentButtonLabel: 'Show all',
    moreContentButtonLink: '/projects/',
    mainPhotoAlt: 'Music notation',
  },
};
