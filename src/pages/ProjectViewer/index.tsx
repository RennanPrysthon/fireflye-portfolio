import React from 'react';

import {
  useParams,
} from 'react-router-dom';

import { Container } from './styles';

const ProjectViewer: React.FC = () => {
  const { id } = useParams<{id: string}>();
  return (
    <Container>
      <h1>
        Project id :
        {id}
      </h1>
    </Container>
  );
};

export default ProjectViewer;
