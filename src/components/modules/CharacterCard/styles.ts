import styled from 'styled-components';

export const Container = styled.div`
  grid-column: span 4 ;

  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export const Content = styled.div`
  div {
    img {
      border: 4px solid #0A0F0D;
      width: 100%;
    }
  }

  h3 {
    text-align: center;
    margin: 0.7rem 0 0.5rem 0;
  }
`;