import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { EmailOutlineIcon, LinkedinIcon } from 'mdi-react';
import Container from '../components/container';
import Tagline from '../components/tagline';

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  a + a{
    margin-left: 12px;
  }
`;

const SocialLink = styled.a`
  height: 35px;
  width: 35px;
  border: 2px solid black;
  border-radius: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <div>
    <Helmet title="About | Ashley Worsham">
      <body style="background: #E6C3E2" />
    </Helmet>

    <Container>
      <Tagline>
        I SOLVE PROBLEMS<br />THROUGH DESIGN.
      </Tagline>

      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="text-center">
            <h6 style={{ marginTop: 8 }}>
              SAY HEY!
            </h6>

            <div className="mt-5">
              <a style={{ color: 'black', textDecoration: 'underline' }} href="/ashley-worsham-resume.pdf" target="_blank">Check Out My Resume</a>
            </div>

            <SocialRow>
              <SocialLink href="mailto:aaworsham@gmail.com">
                <EmailOutlineIcon size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/ashleyworsham" target="_blank">
                <LinkedinIcon size={20} />
              </SocialLink>
            </SocialRow>
          </div>
        </div>
        <div className="col-12 col-sm-8" style={{ fontSize: '18px' }}>
          <p>
            I&apos;m Ashley Worsham and this is my UX Portfolio. I have a background in psychology and my desire to understand people’s behaviors, emotions, and motivations is what led me to user experience.
          </p>

          <p>
            I specialize in designing and delivering user-centered products that drive real business value through audience engagement and user experience across multiple digital channels.
          </p>

          <p>
            I am both creative and analytical, so I focus on designing engaging experiences for real people driven by real data. Ultimately, I believe design is about solving problems.
          </p>

          <p>
            My favorite question is: why?
          </p>

          <p>
            Making experiences easier is a way for me to make an impact on people one research experiment and redesign at a time.
          </p>

          <p>
            Aside from all this, I am passionate about everything health and fitness, love to travel, and really appreciate a great breakfast burrito.
          </p>

          <p>
            Feel free to reach out!
          </p>
        </div>
      </div>
    </Container>
  </div>
);
