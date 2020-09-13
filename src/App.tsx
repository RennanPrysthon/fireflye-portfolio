import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';

function App() {
  return (
    <>
      <Section
        variant="red"
      >
      </Section>
      <Section
        variant="transparent"
      ></Section>
      <Section
        variant="white"
      >
      </Section>
      <GlobalStyles />
    </>
  );
}

export default App;
