import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import cover from '../../assets/cover.png';

import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  LogoPequena,
  Menu,
  Close,
  Content,
  MenuContent,
} from './styles';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Section: React.FC<Props> = ({ variant, img = cover, children }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((state) => !state);

  const links: MenuProps[] = useMemo(() => [
    {
      number: 1,
      name: 'Home',
      link: '/',
    },
    {
      number: 2,
      name: 'Contato',
      link: '/contact',
    },
  ], []);

  return (
    <>
      <MenuContent
        animate={menu ? 'open' : 'closed'}
        variants={variants}
      >
        <header>
          <Close onClick={toggleMenu} />
        </header>
        <ul>
          {links.map((item) => (
            <li key={item.number}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </MenuContent>
      <Container
        className={variant}
        img={img}
      >
        <HeaderWrapper>
          <Header>
            <h1>
              <Logo />
              <LogoPequena />
            </h1>
            <Menu onClick={toggleMenu} />
          </Header>
        </HeaderWrapper>

        <Content>
          {children}
        </Content>
      </Container>
    </>
  );
};

export default Section;
