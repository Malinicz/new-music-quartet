import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object, arrayOf } from 'prop-types';
import styled from 'styles';

import {
  H2,
  SinglePageSectionMain,
  SinglePageSectionHeading,
  SectionHeadingLine,
  SinglePageSectionContent,
  Paragraph,
  MaxWidthWrapper,
  SinglePageSectionPhoto,
} from 'components/base';
import { SinglePageLayout, Video } from 'components';

import projectsImage from 'assets/projects.jpg';

const ProjectHolder = styled.div``;

class Projects extends Component {
  render() {
    const {
      sharedData: { language },
      routeData: { title },
      history,
      projects,
    } = this.props;

    return (
      <SinglePageLayout history={history} language={language}>
        <MaxWidthWrapper>
          <SinglePageSectionMain>
            <SinglePageSectionHeading>
              {title}
              <SectionHeadingLine />
            </SinglePageSectionHeading>
            <SinglePageSectionPhoto src={projectsImage} />
            <SinglePageSectionContent>
              {projects.map((project) => {
                const paragraphs = project.description.split('\n');

                return (
                  <ProjectHolder key={project.title}>
                    <H2>{project.title}</H2>
                    {paragraphs.map((paragraph, index) => (
                      <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    {project.videoUrl.map((url, videoIndex) => (
                      <Video
                        key={videoIndex}
                        url={url}
                        width={600}
                        height={320}
                      />
                    ))}
                  </ProjectHolder>
                );
              })}
            </SinglePageSectionContent>
          </SinglePageSectionMain>
        </MaxWidthWrapper>
      </SinglePageLayout>
    );
  }
}

Projects.defaultProps = {
  routeData: {},
  sharedData: {},
  projects: [],
};

Projects.propTypes = {
  history: object.isRequired,
  routeData: object,
  sharedData: object,
  projects: arrayOf(object),
};

export default withRouteData(Projects);
