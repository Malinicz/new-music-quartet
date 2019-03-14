import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';

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

class Bio extends Component {
  render() {
    const {
      routeData: { title, paragraphs },
    } = this.props;

    return (
      <SinglePageLayout>
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
            </SinglePageSectionContent>
          </SinglePageSectionMain>
        </MaxWidthWrapper>
      </SinglePageLayout>
    );
  }
}

Bio.defaultProps = {
  routeData: {},
};

Bio.propTypes = {
  history: object.isRequired,
  routeData: object,
};

export default withRouteData(Bio);
