import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object, func, bool } from 'prop-types';
import styled from 'styles';

import {
  H2,
  StandardSection,
  StandardSectionMain,
  StandardSectionAside,
  SectionImage,
  SectionHeading,
  SectionContent,
  SectionHeadingLine,
  SectionAsideTop,
  SectionAsideBottom,
  InputsRow,
  MaxWidthWrapper,
  Form,
  InputGroup,
  InputLabel,
  Input,
  TextArea,
} from 'components/base';
import { CrossElement, AnimatedPhoto, Icon } from 'components';

import contactImage from 'assets/contact.jpg';
import contactImageSmall from 'assets/contact-small.jpg';

const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(H2)`
  font-weight: bold;
`;

const Phone = styled.a`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 0;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 100px;
  height: 40px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  background: transparent;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const IconHolder = styled.div`
  position: absolute;
  right: 30px;
  bottom: 6px;
  color: ${({ theme, isEmailValid }) =>
    isEmailValid ? theme.colors.primaryDarker : theme.colors.secondaryDarker};
`;

const StyledInputGroup = styled(InputGroup)`
  width: 50%;
  padding-right: 15px;

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 100%;
    padding-right: 0;
  }
`;

class ContactComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      description: '',
      isEmailValid: false,
    };
  }

  onUpdateField = (name, value) => {
    this.setState({ [name]: value });
  };

  onUpdateEmail = (value) => {
    const isEmailValid = this.validateEmail(value);
    this.setState({ email: value, isEmailValid });
  };

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    const { email, name, description, isEmailValid } = this.state;
    const {
      createRef,
      isActive,
      sharedData: { language },
      routeData: {
        contact: {
          title,
          callUsLabel,
          sendMessageLabel,
          formSubmitButtonLabel,
          formLabelName,
          formLabelDescription,
          formSubmissionSuccessLink,
        },
      },
    } = this.props;

    return (
      <StandardSection ref={(el) => createRef('contact', el)} name={title}>
        <MaxWidthWrapper>
          <StandardSectionMain>
            <SectionHeading>
              {title} <SectionHeadingLine />
            </SectionHeading>
            <SectionImage>
              <AnimatedPhoto
                image={contactImage}
                imageSmall={contactImageSmall}
                isActive={isActive}
              />
              <CrossElement />
            </SectionImage>
            <SectionContent>
              <Title>{callUsLabel}</Title>
              <PhoneNumbers>
                <Phone href="tel:+48 512 041 057">+48 512 041 057</Phone>
                <Phone href="tel:+48 692 666 146">+48 692 666 146</Phone>
              </PhoneNumbers>
              <Title style={{ paddingTop: '60px' }}>{sendMessageLabel}</Title>
              <Form
                action="https://formspree.io/atmaquartet@gmail.com"
                method="POST">
                <InputsRow>
                  <StyledInputGroup>
                    <InputLabel htmlFor="email">email *</InputLabel>
                    <Input
                      type="text"
                      name="email"
                      value={email}
                      style={{ paddingRight: '50px' }}
                      onChange={(e) => this.onUpdateEmail(e.target.value)}
                    />
                    {email && (
                      <IconHolder isEmailValid={isEmailValid}>
                        {isEmailValid ? (
                          <Icon name="checkmark" size={20} />
                        ) : (
                          <Icon name="close" size={20} />
                        )}
                      </IconHolder>
                    )}
                  </StyledInputGroup>
                  <StyledInputGroup>
                    <InputLabel htmlFor="name">{formLabelName}</InputLabel>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) =>
                        this.onUpdateField('name', e.target.value)
                      }
                    />
                  </StyledInputGroup>
                </InputsRow>
                <InputGroup>
                  <InputLabel htmlFor="description">
                    {formLabelDescription} *
                  </InputLabel>
                  <TextArea
                    type="text"
                    name="description"
                    value={description}
                    style={{ marginBottom: '20px' }}
                    onChange={(e) =>
                      this.onUpdateField('description', e.target.value)
                    }
                  />
                </InputGroup>
                <input
                  type="hidden"
                  name="_next"
                  value={formSubmissionSuccessLink}
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="[ATMA QUARTET] Nowa wiadomość"
                />
                <input type="hidden" name="_format" value="plain" />
                <input type="hidden" name="_language" value={language} />
                <SubmitButton disabled={!email || !description} type="submit">
                  {formSubmitButtonLabel}
                </SubmitButton>
              </Form>
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
}

ContactComp.defaultProps = {
  routeData: {},
  sharedData: {},
};

ContactComp.propTypes = {
  routeData: object,
  sharedData: object,
  createRef: func.isRequired,
  isActive: bool.isRequired,
};

export const Contact = withRouteData(ContactComp);
