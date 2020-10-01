import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: grid;
  width: 70%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr)
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr)
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr)
  }
`;

export const Item = styled.div`
  margin: 2px;
  position: relative;

  > img {
    display: block;
  }

  > span:hover {
    opacity: 1;
  }

  > span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.7)
  }
`;
