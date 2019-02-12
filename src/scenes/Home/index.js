import React, { Component } from 'react';
import styled from 'styles';
import { keyframes } from 'styled-components';

const pic1 = require('./assets/pic1.jpg');
const pic2 = require('./assets/pic2.jpg');
const pic3 = require('./assets/pic3.jpg');

const pictureAnimationIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

const Holder = styled.div`
  display: flex;
`;

const PictureHolder = styled.div`
  position: fixed;
  width: 50%;
  height: 100vh;
  overflow: hidden;
`;

const Picture = styled.img`
  display: block;
  visibility: ${({ animate }) => (animate ? 'visible' : 'hidden')};
  border: 0;
  height: 100%;
  /* transform: translateX(-50%); */
  margin-left: 50%;
  animation: ${({ animate }) =>
    animate ? `${pictureAnimationIn} 0.3s ease` : 'none'};
  animation-fill-mode: forwards;
  transition: transform 10s ease;
`;

const ContentHolder = styled.div`
  width: 100%;
  padding-left: 50%;
  color: ${({ theme }) => theme.colors.brightest};
  background-color: ${({ theme }) => theme.colors.darker};
`;

const Section = styled.div`
  padding: 60px;
`;

const SectionOne = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  height: 100vh;
`;

const SectionTwo = styled(Section)`
  background-color: #edeff2;
  color: #000;
`;

const SectionThree = styled(Section)`
  background-color: #edeff2;
  color: #000;
  height: 1500px;
`;

const HeadingHolder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const Heading = styled.h2`
  font-size: 3em;
  margin: 0;
`;

const Line = styled.div`
  height: 3px;
  width: 200px;
  margin-left: 15px;
  border-radius: 100%;
  background-color: #000;
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.3em;
`;

class Home extends Component {
  section1 = null;
  section2 = null;
  section3 = null;

  animationTimeout = null;

  constructor(props) {
    super(props);
    this.state = {
      animate: true,
      activePic: pic1,
      posX: 0,
      posY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttle(this.changePics, 100));
    window.addEventListener('mousemove', this.throttle(this.animatePics, 200));
  }

  onChangePic = () => {
    console.log('picture changed');
  };

  animatePics = () => {
    const { posX, posY } = this.state;
    const currentX = window.event.clientX;
    const currentY = window.event.clientY;
    if (posX !== currentX || posY !== currentY) {
      this.setState({ posX: currentX, posY: currentY });
    }
  };

  changePics = () => {
    const config = [
      {
        id: 'section1',
        pic: pic1,
        bottom: this.section1.getBoundingClientRect().bottom,
      },
      {
        id: 'section2',
        pic: pic2,
        bottom: this.section2.getBoundingClientRect().bottom,
      },
      {
        id: 'section3',
        pic: pic3,
        bottom: this.section3.getBoundingClientRect().bottom,
      },
    ];

    const activeIndex = config.findIndex((el) => el.bottom > 0);

    const { activePic } = this.state;

    if (activePic !== config[activeIndex].pic) {
      this.setState({
        activePic: config[activeIndex].pic,
        animate: false,
      });
      window.setTimeout(() => {
        const { animate: prevAnimate } = this.state;
        if (!prevAnimate) {
          this.setState({ animate: true });
        }
      }, 100);
    }
  };

  throttle = (fn, wait) => {
    let time = Date.now();
    return function elo() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  render() {
    const { activePic, posX, posY, animate } = this.state;

    let translateXValue = 50;
    let scaleValue = 1;

    if (typeof window !== 'undefined') {
      translateXValue += (posX / window.innerWidth) * 10;
      scaleValue = 1 + posY / window.innerHeight / 10;
    }

    return (
      <Holder>
        <PictureHolder>
          <Picture
            src={activePic}
            animate={animate}
            style={{
              transform: `scale3d(${scaleValue}, ${scaleValue}, ${scaleValue}) translate3d(${-translateXValue}%, 0, 0)`,
            }}
          />
        </PictureHolder>
        <ContentHolder>
          <SectionOne innerRef={(el) => (this.section1 = el)}>
            <h1 style={{ fontSize: '3.5em' }}>
              New Music <br />
              Quartet
            </h1>
            <Line style={{ width: '40px', backgroundColor: '#fff' }} />
          </SectionOne>
          <SectionTwo innerRef={(el) => (this.section2 = el)}>
            <HeadingHolder>
              <Heading>Biografia</Heading>
              <Line />
            </HeadingHolder>
            <Paragraph>
              Zespół powstał w 2016 roku i jest postrzegany jako jeden z
              najciekawszych kwartetów smyczkowych młodego pokolenia. Tworzą go
              absolwentki akademii muzycznych w Polsce: Katarzyna Gluza -
              skrzypce, Paulina Marcisz- skrzypce, Karalina Orsik-Sauter-altówka
              oraz Dominika Szczypka - wiolonczela. Kwartet jest laureatem
              pierwszej nagrody oraz trzech Nagród Specjalnych na „II
              Międzynarodowym Konkursie Kwartetów Smyczkowych im. Karola
              Szymanowskiego” w Katowicach (2017), „Förderpreis” i „Bärenreiter
              Urtext Preis” na „X Franz Schubert and Modern Music Chamber Music
              Competition” w Grazu (2018) oraz III nagrody na „I Międzynarodowym
              Konkursie Muzycznym im. K. Szymanowskiego” w Katowicach (2018).
            </Paragraph>
            <Paragraph>
              „New Music Quartet” prowadzi intensywną działalność koncertową,
              popularyzując muzykę kameralną w kraju oraz na świecie. Jedną z
              wiodących idei kwartetu jest rozpowszechnianie polskiego dorobku
              kulturowego, dlatego dzieła polskich kompozytorów stanowią ważny
              trzon w repertuarze zespołu. Kwartet konsultował swoje
              interpretacje z wybitnymi osobowościami świata kameralistyki.
              Dzięki zaproszeniom na znaczące wydarzenia związane z muzyką
              kameralną, miał szansę doskonalić warsztat pod okiem takich
              mistrzów jak: Günter Pichler, Gerhard Schulz, Isabel Charisius,
              Valentin Erben („Alban Berg Quartet”), O. Wille („Kuss Quartet”),
              A. Meunier, A. Pavlovsky („Jerusalem Quartet”), Luc-Marie Aguera
              („Ysaye Quartet”), H. Müller („Artemis Quartet”), Aitor Hevia,
              Cibrán Sierra, Josep Puchades, Helena Poggio („Quarteto Quiroga”),
              Frank Reinecke, Stefan Fehlandt, Stephan Forck („Vogler Quartet”),
              Eugene Drucker, Lawrence Dutton, Paul Watkins („Emerson Quartet”),
              O. Mandozzi („Vienna Brahms Trio”), A. Levitan, M. Moś, Sz.
              Krzeszowiec („Kwartet Śląski”), J. Jakowicz („Zehetmair Quartet”),
              P. Szumieł („Apollon Musagète Quartett”), J. Nadrzycki
              („Penderecki Piano Trio”), K. Marianowski („Penderecki Piano
              Trio”), A. Bryła („Meccore String Quartet”), J. Kreft („Herbert
              Piano Trio”).
            </Paragraph>
            <Paragraph>
              „New Music Quartet” wystąpił na wielu prestiżowych festiwalach
              takich jak między innymi : „Davos Festival" (Szwajcaria),
              „ProQuartet”, „Quatuors a Bordeaux”, „Festival 2018 des musiques
              d’été” (Francja), „Zeist Music Days” (Holandia), „Jenuesses
              Musicales Chamber Music Campus” (Niemcy), „Chigiana International
              Festival & Summer Academy” (Włochy), „Musethica” (Hiszpania), „41.
              Dni Muzyki Karola Szymanowskiego” w Zakopanem, Międzynarodowy
              Festiwal Muzyki „Emanacje”, „XXVIII Międzynarodowy Festiwal
              Młodych Laureatów Konkursów Muzycznych”, Festiwal Muzyki
              Kameralnej „Muzyka u Źródeł”, „Muzyka w willi Blumwego”, „Festiwal
              Muzyki Kameralnej” w Urlach, „Oko nigdy nie śpi”, Fonomo Music &
              Film Festival”, „Sztuka w Gryfie”, „Bydgoski Festiwal
              Nauk”(Polska).
            </Paragraph>
            <Paragraph>
              „New Music Quartet” jest laureatem stypendium Ministra Kultury i
              Dziedzictwa Narodowego „Młoda Polska” (2018), dzięki któremu
              został zrealizowany projekt płyty z dziełami kompozytorów
              polskich. Kwartet jest beneficjentem stypendium prezydenta Miasta
              Bydgoszczy. Zagrał również koncert w ramach stypendium twórczego
              miasta Bielska-Białej. Od 2018 roku „New Music Quartet” jest
              członkiem projektu „Le Dimore del Quartetto”, w ramach którego
              popularyzuje muzykę polską we Włoszech. Uczestniczy również we
              francuskim programie „ProQuartet”, wspierającym muzykę kameralną
              na świecie.
            </Paragraph>
          </SectionTwo>
          <SectionThree innerRef={(el) => (this.section3 = el)}>
            <HeadingHolder>
              <Heading>Koncerty</Heading>
              <Line />
            </HeadingHolder>
          </SectionThree>
        </ContentHolder>
      </Holder>
    );
  }
}

Home.propTypes = {};

export default Home;
