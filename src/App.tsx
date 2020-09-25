import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Section from './components/Section';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <Section
        variant="transparent"
      >
        <Greetings />
      </Section>
      <Section
        variant="white"
      />
      <Section
        variant="red"
      />
      <GlobalStyles />
    </>
  );
}

export default App;
