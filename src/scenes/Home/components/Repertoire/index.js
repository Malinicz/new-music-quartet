import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import {
  StandardSection,
  StandardSectionMain,
  StandardSectionAside,
  SectionImage,
  SectionHeading,
  SectionContent,
  SectionHeadingLine,
  SectionAsideTop,
  SectionAsideBottom,
  MaxWidthWrapper,
} from 'components/base';
import { CrossElement, AnimatedPhoto } from 'components';

import repertoireImage from 'assets/repertoire.jpg';
import repertoireImageSmall from 'assets/repertoire-small.jpg';

const SongsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const SongsColumn = styled.div`
  flex: 1;
  min-width: 270px;
  margin-right: 20px;

  &:last-child {
    margin-bottom: 50px;
  }
`;

const Song = styled.div`
  padding: 5px 0;
`;

export const Repertoire = withRouteData(
  ({ routeData, createRef, isActive }) => {
    const { title, list, mainPhotoAlt } = routeData.repertoire;

    const firstColumn = list.slice(0, 5);
    const secondColumn = list.slice(5);

    return (
      <StandardSection ref={(el) => createRef('repertoire', el)} name={title}>
        <MaxWidthWrapper flexDirection="row-reverse">
          <StandardSectionMain>
            <SectionHeading>
              {title} <SectionHeadingLine />
            </SectionHeading>
            <SectionImage>
              <AnimatedPhoto
                image={repertoireImage}
                imageSmall={repertoireImageSmall}
                isActive={isActive}
                alt={mainPhotoAlt}
              />
              <CrossElement left />
            </SectionImage>
            <SectionContent>
              <SongsHolder>
                <SongsColumn>
                  {firstColumn.map((song) => (
                    <Song key={song}>{song}</Song>
                  ))}
                </SongsColumn>
                <SongsColumn>
                  {secondColumn.map((song) => (
                    <Song key={song}>{song}</Song>
                  ))}
                </SongsColumn>
              </SongsHolder>
            </SectionContent>
          </StandardSectionMain>
          <StandardSectionAside>
            <SectionAsideTop />
            <SectionAsideBottom />
          </StandardSectionAside>
        </MaxWidthWrapper>
      </StandardSection>
    );
  }
);

Repertoire.defaultProps = {
  routeData: {},
};

Repertoire.propTypes = {
  routeData: object,
};
