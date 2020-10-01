import React from 'react';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import Greetings from '../../components/Greetings';
import ProjectList from '../../components/ProjectList';

const Home: React.FC = () => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
  >
    <Section variant="transparent">
      <Greetings />
    </Section>
    <Section variant="white">
      <ProjectList />
    </Section>
    <Section variant="red" />
  </motion.div>
);

export default Home;
