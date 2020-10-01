import React from 'react';

import { Container } from './styles';

const Project: React.FC<ProjectType> = ({ id, name, img }) => (
  <Container>
    <p>{id}</p>
    <h1>{name}</h1>
    <p>{img}</p>
  </Container>
);

export default Project;
