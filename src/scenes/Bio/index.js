import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  SinglePageSectionMain,
  SinglePageSectionHeading,
  SectionHeadingLine,
  SinglePageSectionContent,
  Paragraph,
  MaxWidthWrapper,
  SinglePageSectionPhoto,
} from 'components/base';
import { SinglePageLayout } from 'components';

import bio from 'assets/bio.jpg';

import katarzynaPhoto from 'assets/katarzyna.jpg';
import paulinaPhoto from 'assets/paulina.jpg';
import karalinaPhoto from 'assets/karalina.jpg';
import dominikaPhoto from 'assets/dominika.jpg';

const TeamPhotosHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
`;

const PersonHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0px 7px 50px 7px;
`;

const PersonPhoto = styled.img`
  display: block;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 3px 12px 5px rgba(0, 0, 0, 0.1);
`;

const PersonName = styled.div`
  margin-top: 10px;
  font-size: 1.3em;
  font-weight: bold;
`;

const PersonInstrument = styled.div``;

class Bio extends Component {
  render() {
    const {
      sharedData: { language },
      routeData: { title, paragraphs, katarzyna, dominika, paulina, karalina },
      history,
    } = this.props;

    return (
      <SinglePageLayout history={history} language={language}>
        <MaxWidthWrapper>
          <SinglePageSectionMain>
            <SinglePageSectionHeading>
              {title}
              <SectionHeadingLine />
            </SinglePageSectionHeading>
            <SinglePageSectionPhoto src={bio} />
            <SinglePageSectionContent>
              {paragraphs.map((paragraph, index) => {
                return <Paragraph key={index}>{paragraph}</Paragraph>;
              })}
              <TeamPhotosHolder>
                <PersonHolder>
                  <PersonPhoto src={katarzynaPhoto} />
                  <PersonName>{katarzyna.name}</PersonName>
                  <PersonInstrument>{katarzyna.instrument}</PersonInstrument>
                </PersonHolder>
                <PersonHolder>
                  <PersonPhoto src={paulinaPhoto} />
                  <PersonName>{paulina.name}</PersonName>
                  <PersonInstrument>{paulina.instrument}</PersonInstrument>
                </PersonHolder>
                <PersonHolder>
                  <PersonPhoto src={karalinaPhoto} />
                  <PersonName>{karalina.name}</PersonName>
                  <PersonInstrument>{karalina.instrument}</PersonInstrument>
                </PersonHolder>
                <PersonHolder>
                  <PersonPhoto src={dominikaPhoto} />
                  <PersonName>{dominika.name}</PersonName>
                  <PersonInstrument>{dominika.instrument}</PersonInstrument>
                </PersonHolder>
              </TeamPhotosHolder>
            </SinglePageSectionContent>
          </SinglePageSectionMain>
        </MaxWidthWrapper>
      </SinglePageLayout>
    );
  }
}

Bio.defaultProps = {
  routeData: {},
  sharedData: {},
};

Bio.propTypes = {
  history: object.isRequired,
  routeData: object,
  sharedData: object,
};

export default withRouteData(Bio);
