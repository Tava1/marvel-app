import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem 0;

  text-align: center;

  && > div {
    display: inline-flex;
    align-items: flex-end;
    flex-direction: column;

    .line {
      border-bottom: 6px solid #EC1D24;
      width: 30px;
    }
  }
`;