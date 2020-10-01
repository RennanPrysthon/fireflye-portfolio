import React from 'react';

import Section from '../../components/Section';
import Greetings from '../../components/Greetings';
import ProjectList from '../../components/ProjectList';

const Home: React.FC = () => (
  <>
    <Section variant="transparent">
      <Greetings />
    </Section>
    <Section variant="white">
      <ProjectList />
    </Section>
    <Section variant="red" />
  </>
);

export default Home;
