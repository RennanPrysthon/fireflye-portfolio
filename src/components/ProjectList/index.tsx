import React, { useMemo } from 'react';

import {
  Link,
} from 'react-router-dom';

import { Container, Wrapper, Item } from './styles';

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
      <Wrapper>
        {data.map((item) => (
          <Link key={item.id} to={`/project/${item.id}`}>
            <Item>
              <img src={item.img} alt="teste" />
              <span />
            </Item>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProjectList;
