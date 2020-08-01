import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const ContactSection = styled.div`
    margin: 0 auto;
    max-width: 80vw;
    color: #9d8189;
    h1 {
      text-align: center;
    }
`;

const ContactForm = styled.form`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 15px;

    label {
      text-align: right;
    }

    input {
      max-width: 25%;
      background: #fcd5ce;
      border: 1px solid #f2b5d4;
      border-radius: 4px;
    }
`;

function Contact() {
  return (
      <PageWrapper>
        <ContactSection>
          <h1>Contact Me</h1>
          <ContactForm>
            <label for="fname">First name: </label>
            <input type="text" id="fname" name="fname" placeholder="First name" autoComplete="given-name"/>
            <label for="lname">Last name: </label>
            <input type="text" id="lname" name="lname" placeholder="Last name" autoComplete="family-name"/>
            <label for="message">E-mail: </label>
            <input type="email" id="email" name="email" placeholder="E-mail" autoComplete="email"/>
          </ContactForm>
        </ContactSection>
      </PageWrapper>
  );
}

export default Contact;