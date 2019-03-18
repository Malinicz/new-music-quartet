import React from 'react';
import { withRouteData } from 'react-static';
import { object, arrayOf } from 'prop-types';
import styled from 'styles';

import {
  H2,
  Paragraph,
  StandardSection,
  StandardSectionMain,
  StandardSectionAside,
  SectionImage,
  SectionHeading,
  SectionContent,
  SectionHeadingLine,
  SectionAsideTop,
  SectionAsideBottom,
  BackgroundLetter,
  MaxWidthWrapper,
} from 'components/base';
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';

import image from 'assets/projects.jpg';

const ProjectHolder = styled.div`
  margin-bottom: 30px;
`;

const ProjectTitle = styled(H2)``;

export const Projects = withRouteData(
  ({ routeData, createRef, isActive, projects }) => {
    const {
      title,
      backgroundLetter,
      moreContentButtonLabel,
    } = routeData.projects;

    return (
      <StandardSection ref={(el) => createRef('projects', el)} name={title}>
        <MaxWidthWrapper flexDirection="row-reverse">
          <StandardSectionMain>
            <SectionHeading>
              {title} <SectionHeadingLine />
            </SectionHeading>
            <SectionImage>
              <AnimatedPhoto image={image} isActive={isActive} />
              <CrossElement left />
            </SectionImage>
            <SectionContent>
              {projects.map((project) => {
                const paragraphs = project.description.split('\n');

                return (
                  <ProjectHolder>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    {paragraphs.map((paragraph) => (
                      <Paragraph>{paragraph}</Paragraph>
                    ))}
                  </ProjectHolder>
                );
              })}
            </SectionContent>
          </StandardSectionMain>
          <StandardSectionAside>
            <SectionAsideTop>
              <BackgroundLetter x={0} y={50} isActive={isActive}>
                {backgroundLetter}
              </BackgroundLetter>
            </SectionAsideTop>
            <SectionAsideBottom>
              <MoreContentButton
                label={moreContentButtonLabel}
                href="/projekty"
              />
            </SectionAsideBottom>
          </StandardSectionAside>
        </MaxWidthWrapper>
      </StandardSection>
    );
  }
);

Projects.defaultProps = {
  routeData: {},
  sharedData: {},
  concerts: [],
};

Projects.propTypes = {
  routeData: object,
  sharedData: object,
  concerts: arrayOf(object),
};
