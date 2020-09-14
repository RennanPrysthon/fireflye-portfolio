import React, { useState, useMemo } from 'react';

import cover from '../../assets/cover.png'

import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  LogoPequena,
  Menu,
  Close,
  Content,
  MenuContent
} from './styles';

interface Props {
  variant: 'red' | 'white' | 'transparent';
  img?: string;
}

interface MenuProps {
  number: number;
  name: string;
  link: string;
}

const Section: React.FC<Props> = ({ variant, img = cover, children }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(state => !state)

  const links: MenuProps[] = useMemo(() => [
    {
      number: 1,
      name: 'Home',
      link: '/'
    },
    {
      number: 2,
      name: 'Contato',
      link: '/'
    }
  ], [])

  return (
    <>
      <MenuContent show={menu}>
        <header>
          <Close onClick={toggleMenu}/>
        </header>
        <ul>
          {links.map(item => (
            <li key={item.number}>
              {item.name}
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
            <Menu onClick={toggleMenu}/>
          </Header>
        </HeaderWrapper>

        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}

export default Section
