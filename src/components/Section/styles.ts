import styled from 'styled-components';

import FireFlyLogo from '../FireFlyLogo';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  &.red {
    --bg-color: var(--color-secondary);
    --logo-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }
  &.transparent {
    --bg-color: url(${require('../../assets/cover.jpg')});
    --logo-color: #FFF;
  }
  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;
    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }
  background: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`

  z-index: 3;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  animation-duration: 2s;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled(FireFlyLogo)`
  width: 100px;
  height: 50px;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);
`;
