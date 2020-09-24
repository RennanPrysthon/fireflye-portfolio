import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Section from './components/Section';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Section
        variant="transparent"
      ></Section>
      <Section
        variant="white"
      >
        <Projects />
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
