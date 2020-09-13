import styled from 'styled-components';

import FireFlyLogo from '../FireFlyLogo';
import FireFlyLogoPeq from '../FireFlyLogoPeq';

import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai"

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
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px;
  animation-duration: 2s;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &:hover {
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  }
`;

export const Logo = styled(FireFlyLogo)`
  width: 100px;
  height: 50px;
  fill: var(--logo-color);
  @media only screen and (max-width: 600px) {
    & {
     display: none;
    }
  }
`;

export const LogoPequena = styled(FireFlyLogoPeq)`
  width: 100px;
  height: 50px;
  fill: var(--logo-color);
  @media only screen and (min-width: 600px) {
    & {
     display: none;
    }
  }
`;

export const Menu = styled(RiMenu4Fill)`
  width: 30px;
  height: 30px;
  fill: var(--logo-color);
  cursor: pointer;
`

export const MenuContent = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'block' : 'none' };
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9);
  z-index: 5;
  &:before,&:after{
    content: '';
    position: fixed;
  }

  header {
    padding: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ul {
    padding: 0 50px;
  }

  ul > li {
    font-size: 22px;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-bottom: 0.5px solid rgba(255,255,255, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export const Close = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  fill: #fff;
  z-index:10;
  cursor: pointer;
`

export const Content = styled.div`
  scroll: none;
  z-index: 2;
  position: absolute;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);
`;
