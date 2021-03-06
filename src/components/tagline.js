import styled from 'styled-components';

export default styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 32px auto 72px;
  font-size: 28px;
  font-weight: bold;
  position: relative;
  letter-spacing: 1.22px;
  line-height: 40px;
  width: 500px;

  @media (max-width: 668px) {
    font-size: 16px;
    line-height: 26px;
    width: 300px;
  }

  &:after {
    position: absolute;
    content: '';
    width: 75px;
    height: 3px;
    bottom: -20px;
    left: calc(50% - 75px/2);
    background: black;
  }
`;
