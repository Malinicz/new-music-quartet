import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';

import {
  H2,
  Paragraph,
  SinglePageSectionMain,
  SinglePageSectionHeading,
  SectionHeadingLine,
  SinglePageSectionContent,
  MaxWidthWrapper,
  SinglePageSectionPhoto,
} from 'components/base';
import { SinglePageLayout } from 'components';

import contact from 'assets/contact.jpg';

class MailSubmissionSuccess extends Component {
  render() {
    const {
      sharedData: { language },
      routeData: { title, successTitle, description },
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
            <SinglePageSectionPhoto src={contact} />
            <SinglePageSectionContent>
              <H2>{successTitle}</H2>
              <Paragraph>{description}</Paragraph>
            </SinglePageSectionContent>
          </SinglePageSectionMain>
        </MaxWidthWrapper>
      </SinglePageLayout>
    );
  }
}

MailSubmissionSuccess.defaultProps = {
  routeData: {},
  sharedData: {},
};

MailSubmissionSuccess.propTypes = {
  history: object.isRequired,
  routeData: object,
  sharedData: object,
};

export default withRouteData(MailSubmissionSuccess);
