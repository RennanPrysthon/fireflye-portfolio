import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';

function App() {
  return (
    <>
      <Section
        variant="transparent"
      ></Section>
      <Section
        variant="white"
      >
      </Section>
      <Section
        variant="red"
      >
      </Section>
      <GlobalStyles />
    </>
  );
}

export default App;
