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
    subtitle: '',
    mainPhotoAlt: 'Violin',
    moreContentButtonLabel: 'Full repertoire',
    list: [
      'J. Haydn - String Quartet Op.20 No.2',
      'J. Haydn - String Quartet Op.33 No.5',
      'W.A. Mozart - String Quartet KV 421',
      'L.van Beethoven - String Quartet Op.18 No.4',
      'F. Lessel - String Quartet Op.19',
      'F. Schubert - String Quartet  No.10 D.87',
      'F. Schubert - String Quartet „Death and the Maiden” No.14 D.810',
      'F. Mendelssohn - String Quartet Op.13 No.2',
      'S. Moniuszko - String Quartet No.1',
      'K. Szymanowski - String Quartet Op.37 No.1',
      'K. Szymanowski - String Quartet Op.56 No.2',
      'B. Bartok - String Quartet Sz. 85 No.3',
      'D. Szostakowicz - String Quartet Op.110 No.8',
      'A. Tansman - String Quartet No.4',
      'W. Lutosławski - String Quartet',
      'A. Panufnik - String Quartet „Paper Cuts” No.3',
      'K. Penderecki - String Quartet „Pages of an Unwritten Diary" No.3',
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
