import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  > h1 {
    animation: appears .5s ease-in-out;
    font-size: 3em;
    font-weight: bold;
  }

  > h2 {
    animation: appears 1s ease-in-out;
    transition-delay: 1s;
  }

  @keyframes appears{
    from {
      opacity: 0;
      transform: scale(0.5)

    }

    to  {
      opacity: 1;
      transform: scale(1)
    }

  }
`;
