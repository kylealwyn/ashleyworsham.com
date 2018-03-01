import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '../components/container';

const Tagline = styled.h1`
  text-transform: uppercase;
  font-size: 1rem;
  position: relative;
  letter-spacing: 1px;
`;

export default () => (
  <div>
    <Helmet title="About | Ashley Worsham" />

    <Container>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="text-center">
            <Tagline style={{ marginTop: '2rem', marginBottom: '3rem' }}>
              I SOLVE PROBLEMS THROUGH DESIGN.
            </Tagline>

            <Tagline>
              Say Hey!
            </Tagline>

            <div>
              <a href="mailto:aaworsham@gmail.com">Shoot Me An Email</a>
            </div>
            <div>
              <a href="/ashley-worsham-resume.pdf" download>Download My Resume</a>
            </div>

            <div>
              <a href="https://linkedin.com/in/ashleyworsham">Find Me On LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-8">
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
