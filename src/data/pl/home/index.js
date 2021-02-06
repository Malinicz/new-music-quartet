import bioPage from '../bio';

export default {
  bio: {
    title: 'Biografia',
    paragraph1: bioPage.paragraphs[0],
    paragraph2: bioPage.paragraphs[1],
    moreContentButtonLabel: 'Przeczytaj więcej',
    moreContentButtonLink: '/biografia/',
    mainPhotoAlt: 'Zdjęcie zespołu Atma Quartet',
  },
  concerts: {
    title: 'Koncerty',
    eventDetailsText: 'Szczegóły',
    eventTimePrefix: 'Godzina',
    moreContentButtonLabel: 'Pokaż wszystkie',
    moreContentButtonLink: '/koncerty/',
    mainPhotoAlt: 'Zdjęcie zespołu Atma Quartet',
  },
  repertoire: {
    title: 'Repertuar',
    subtitle: '',
    mainPhotoAlt: 'Skrzypce',
    moreContentButtonLabel: 'Pełny repertuar',
    list: [
      'J. Haydn – Kwartet smyczkowy G-dur op. 33 nr 5',
      'W.A. Mozart – Kwartet smyczkowy d-moll KV 421',
      'W.A. Mozart – Kwintet klarnetowy A-dur KV581',
      'L. van Beethoven – Kwartet smyczkowy op. 18 nr 4',
      'F. Schubert – Kwartet smyczkowy d-moll „Śmierć i dziewczyna” nr 14 D. 810',
      'F. Mendelssohn – Kwartet smyczkowy a-moll op. 13 nr 2',
      'S. Moniuszko – Kwartet smyczkowy d-moll nr 1',
      'M. Ravel – Kwartet smyczkowy F-dur M.35',
      'K. Szymanowski – smyczkowy op. 37 nr 1',
      'K. Szymanowski – Kwartet smyczkowy op. 56 nr 2',
      'I. Stravinsky – Trzy utwory na kwartet smyczkowy',
      'D. Szostakowicz – Kwartet smyczkowy c-moll op. 110 nr 8',
      'A. Panufnik – Kwartet smyczkowy „Wycinanki” nr 3 [12’]',
      'K. Penderecki – Kwartet smyczkowy „Kartki z nienapisanego dziennika”',
      'M. Dobrzyński – II Kwartet smyczkowy „Orestes”',
    ],
  },
  discography: {
    title: 'Dyskografia',
    moreContentButtonLabel: 'Zobacz wszystkie',
    moreContentButtonLink: '/dyskografia/',
    albumPhotoAlt: 'Okładka albumu',
  },
  download: {
    title: 'Do pobrania',
    mainPhotoAlt: 'Zdjęcie Atma Quartet',
    bio: 'Notka biograficzna',
    bioLink:
      'https://onedrive.live.com/view.aspx?cid=fb3effc860d8a13d&page=view&resid=FB3EFFC860D8A13D!107&parId=FB3EFFC860D8A13D!104&authkey=!ABmyuXIFcn7xyRM&app=Word',
    bioShort: 'Notka biograficzna - skrócona',
    bioShortLink:
      'https://onedrive.live.com/view.aspx?cid=fb3effc860d8a13d&page=view&resid=FB3EFFC860D8A13D!114&parId=FB3EFFC860D8A13D!104&authkey=!ABmyuXIFcn7xyRM&app=Word',
    rider: 'Rider techniczny',
    riderLink:
      'https://onedrive.live.com/?authkey=%21ABmyuXIFcn7xyRM&cid=FB3EFFC860D8A13D&id=FB3EFFC860D8A13D%21106&parId=FB3EFFC860D8A13D%21104&o=OneUp',
    photos: 'Fotografie',
    photosLink:
      'https://onedrive.live.com/?authkey=%21ABmyuXIFcn7xyRM&id=FB3EFFC860D8A13D%21104&cid=FB3EFFC860D8A13D',
  },
  media: {
    title: 'Media',
    photoLinkAriaLabel: 'Link do zdjęcia w pełnych rozmiarach',
  },
  contact: {
    title: 'Kontakt',
    callUsLabel: 'Zadzwoń',
    sendMessageLabel: 'Napisz',
    formLabelName: 'imię',
    formLabelDescription: 'wiadomość',
    formSubmitButtonLabel: 'wyślij',
    formSubmissionSuccessLink: '/wiadomosc-wyslana/',
    mainPhotoAlt: 'Zdjęcie Atma Quartet',
  },
  projects: {
    title: 'Projekty',
    moreContentButtonLabel: 'Pokaż szczegóły',
    moreContentButtonLink: '/projekty/',
    mainPhotoAlt: 'Zapis nutowy',
  },
};
