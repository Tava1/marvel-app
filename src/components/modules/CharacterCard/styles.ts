import styled from 'styled-components';

export const Container = styled.div`
  /* grid-column: span 3; */

  @media screen and (max-width: 800px) {
    grid-column: span 12;
  }

  @media screen and (min-width:801px) and (max-width: 1023px) {
    grid-column: span 6;
  }

  @media screen and (min-width: 1024px) {
    grid-column: span 3;
  }

  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export const Content = styled.div`
  div {
    img {
      border: 4px solid #0A0F0D;
      width: 100%;

      transition: transform 0.4s;
    }
  }

  h3 {
    text-align: center;
    margin: 0.7rem 0 0.5rem 0;
    color: #0A0F0D;

    transition: color 0.4s;
  }

  &:hover {
    img {
      transform: scale(1.05);

    }

    h3 {
      color: #EC1D24;
    }
  }
`;