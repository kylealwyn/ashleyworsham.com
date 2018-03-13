import styled from 'styled-components';
import { space } from 'styled-system';
import { getLuminance } from 'polished';

const Button = styled.button`
  cursor: pointer;

  ${({
    variant = 'primary', size = 'md', outline = false, block = false, rounded = true, theme,
  }) => {
    const mainColor = theme.colors[variant] || theme.colors[theme.variants[variant]];
    const elementSize = theme.sizes[size];
    const luminance = getLuminance(mainColor);
    const fontColor = luminance < 0.5 ? 'white' : 'black';

    return `
      color: ${outline ? mainColor : fontColor};
      font-size: ${elementSize / 2.5}px;
      padding: ${elementSize / 4}px ${elementSize / 2}px;
      background: ${outline ? 'transparent' : mainColor};
      border: 1px solid ${mainColor};
      width: ${block ? '100%' : 'auto'};
      border-radius: ${rounded ? theme.radius : 0}px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `;
  }}

  ${(props) => {
    if (props.loading) {
      return `
        color: transparent !important;
        pointer-events: none;
        position: relative;
        text-index: -9999px;
        opacity: 0.75;

        &::after {
          display: block;
          content: "";
          animation: loading 650ms infinite linear;
          border-width: .2rem;
          border-style: solid;
          border-radius: .8rem;
          border-right-color: transparent;
          border-top-color: transparent;
          height: 1.2rem;
          left: 50%;
          margin-left: -.6rem;
          margin-top: -.6rem;
          position: absolute;
          top: 48%;
          width: 1.2rem;
        }
      `;
    }
    return '';
  }}

  ${space}
  `;

export default Button;
