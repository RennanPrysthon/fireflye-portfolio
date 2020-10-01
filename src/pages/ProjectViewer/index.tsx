import React from 'react';
import { motion } from 'framer-motion';

import {
  useParams,
} from 'react-router-dom';

import { Container } from './styles';

const ProjectViewer: React.FC = () => {
  const { id } = useParams<{id: string}>();
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Container>
        <h1>
          Project id -
          {id}
        </h1>
      </Container>
    </motion.div>
  );
};

export default ProjectViewer;
