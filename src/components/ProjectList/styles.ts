import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1f2;
`;

export const Item = styled.div`
  margin: 2px;
  position: relative;

  > img {
    display: block;
    width: 100%;
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
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.5)
  }
`;
