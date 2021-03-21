import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
`;