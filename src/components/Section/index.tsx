import React from 'react';
import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  Content,
} from './styles';

interface Props {
  variant: 'red' | 'white' | 'transparent';
}

const Section: React.FC<Props> = ({ variant, children}) => {
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <Logo />
          </h1>

        </Header>
      </HeaderWrapper>

      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Section;
