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
  MaxWidthWrapper,
} from 'components/base';
import { MoreContentButton, CrossElement, AnimatedPhoto } from 'components';

import projectsImage from 'assets/projects.jpg';
import projectsImageSmall from 'assets/projects-small.jpg';

const ProjectHolder = styled.div`
  margin-bottom: 30px;
`;

const ProjectTitle = styled(H2)``;

export const Projects = withRouteData(
  ({ routeData, createRef, isActive, projects }) => {
    const {
      title,
      moreContentButtonLink,
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
              <AnimatedPhoto
                image={projectsImage}
                imageSmall={projectsImageSmall}
                isActive={isActive}
              />
              <CrossElement left />
            </SectionImage>
            <SectionContent>
              {projects.map((project, projectsIndex) => {
                const paragraphs = project.description.split('\n');

                return (
                  <ProjectHolder key={projectsIndex}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    {paragraphs.map((paragraph, paragraphIndex) => (
                      <Paragraph key={paragraphIndex}>{paragraph}</Paragraph>
                    ))}
                  </ProjectHolder>
                );
              })}
            </SectionContent>
          </StandardSectionMain>
          <StandardSectionAside>
            <SectionAsideTop />
            <SectionAsideBottom>
              <MoreContentButton
                label={moreContentButtonLabel}
                href={moreContentButtonLink}
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
