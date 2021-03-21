import styled from 'styled-components';

export const Container = styled.section`
  background: #0A0F0D;
  height: 265px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  margin-bottom: 30px;
`;

export const Content = styled.div``;

export const Context = styled.div`
  text-align: center;
  font-style: italic;
  color: #F9F9F9;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
  }

  p {
    background: #EC1D24;
    display: inline;
    font-weight: 600;
    padding: 0.3rem 0.5rem;
    font-size: 1.5rem;
  }
`;