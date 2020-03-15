import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '../components/container';
import Button from '../components/button';

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  a + a {
    margin-left: 12px;
  }
`;

const SocialLink = styled.a`
  height: 35px;
  width: 35px;
`;

const Wrapper = styled.div`
  .left {
    .illustration {
      max-width: 100%;
      margin: 0 auto;
    }

    button {
      width: 100%;
    }

    @media (max-width: 594px) {
      margin-bottom: 3rem;
    }
  }

  .right {
    padding-left: 3rem;

    @media (max-width: 594px) {
      padding-left: 1rem;
    }
  }
`;

export default ({ data }) => (
  <div>
    <Helmet title="Contact | Ashley Worsham">
      <body style="background: #E6C3E2" />
    </Helmet>

    <Container>
      <Wrapper>

        <div className="row">
          <div className="left col-12 col-sm-4">
            <div className="text-center">
              <img className="illustration" src="/images/card-sorting.png" alt="Card Sorting Illustration" />

              <div className="mt-5">
                <a style={{ color: 'black', textDecoration: 'underline' }} href={data.resume.file.url} target="_blank" rel="noreferrer noopener">
                  <Button>
                    My Resume
                  </Button>
                </a>
              </div>

              <SocialRow>
                <SocialLink href="mailto:aaworsham@gmail.com">
                  <img src="/images/social/email.png" alt="Email Me" />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/ashleyworsham" target="_blank">
                  <img src="/images/social/linkedin.png" alt="Find me on LinkedIn" />
                </SocialLink>
              </SocialRow>
            </div>
          </div>
          <div className="right col-12 col-sm-8" style={{ fontSize: '18px' }}>
            <h4 style={{ marginBottom: 24 }}>Nice to meet you!</h4>

            <p>
              I'm Ashley Worsham and I’m a UX designer in San Francisco. I have a background in psychology and my desire to understand people’s behaviors, emotions, and motivations is what led me to user experience.
            </p>

            <p>
            I specialize in designing and delivering user-centered products that drive real business value through audience engagement and user experience across multiple digital channels.
            </p>

            <p>I am both creative and analytical, so I focus on designing engaging experiences for real people driven by real data. Ultimately, I believe design is about solving problems.</p>

            <p>My favorite question is: why?</p>

            <p>Aside from all this, I am passionate about everything health and fitness, love to travel, and really appreciate a great breakfast burrito.</p>
          </div>
        </div>
      </Wrapper>
    </Container>
  </div>
);

export const pageQuery = graphql`
  query ContactPageQuery {
    resume: contentfulAsset(id: { eq: "c5W6w1wN1qoW6g8aQQMA8u8" }) {
      id
      file {
        url
      }
    }
  }
`;
