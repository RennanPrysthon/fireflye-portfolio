import React from 'react';

import Section from '../Section';
import Greetings from '../Greetings';

const Home: React.FC = () => (
  <>
    <Section variant="transparent">
      <Greetings />
    </Section>
    <Section variant="white" />
    <Section variant="red" />
  </>
);

export default Home;
