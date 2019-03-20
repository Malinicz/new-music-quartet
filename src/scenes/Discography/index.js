import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  H2,
  H3,
  SinglePageSectionMain,
  SinglePageSectionHeading,
  SectionHeadingLine,
  SinglePageSectionContent,
  MaxWidthWrapper,
  Paragraph,
} from 'components/base';
import { SinglePageLayout } from 'components';

import albumPhoto from 'assets/discography/albumPhoto.jpg';

const AlbumHolder = styled.div`
  margin: 50px 0;
`;

const AlbumPhotosHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AlbumPhoto = styled.img`
  width: 350px;
  height: 320px;
  margin: 7px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
`;

const AlbumAuthor = styled(H2)``;

const AlbumName = styled(H3)``;

const AlbumYear = styled(Paragraph)``;

class Discography extends Component {
  render() {
    const {
      sharedData: { language },
      routeData: { title },
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
            <SinglePageSectionContent>
              <AlbumHolder>
                <AlbumPhotosHolder>
                  <a href={albumPhoto}>
                    <AlbumPhoto src={albumPhoto} />
                  </a>
                </AlbumPhotosHolder>
                <AlbumAuthor>Atma Quartet</AlbumAuthor>
                <AlbumName>
                  Penderecki, Szymanowski, Panufnik - String Quartets
                </AlbumName>
                <AlbumYear>2019</AlbumYear>
              </AlbumHolder>
            </SinglePageSectionContent>
          </SinglePageSectionMain>
        </MaxWidthWrapper>
      </SinglePageLayout>
    );
  }
}

Discography.defaultProps = {
  routeData: {},
  sharedData: {},
};

Discography.propTypes = {
  history: object.isRequired,
  routeData: object,
  sharedData: object,
};

export default withRouteData(Discography);
