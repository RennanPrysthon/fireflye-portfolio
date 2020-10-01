import React, { useMemo } from 'react';

import {
  Link,
} from 'react-router-dom';

import { Container, Item } from './styles';

import projects from '../../services/data';

const ProjectList: React.FC = () => {
  const data = useMemo(() => projects.slice(0, 6),
    []);

  if (projects.length === 0) {
    return (
      <div>
        <h2>Lista vazia</h2>
      </div>
    );
  }

  return (
    <Container>
      {data.map((item) => (
        <Link to={`/project/${item.id}`}>
          <Item key={item.id}>
            <img src={item.img} alt="teste" />
            <span />
          </Item>
        </Link>
      ))}
    </Container>
  );
};

export default ProjectList;
